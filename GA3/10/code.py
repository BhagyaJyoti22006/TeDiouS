import hashlib
import multiprocessing as mp
import os

TOKEN = "<TOKEN>"
DIFFICULTY = <DIFFICULTY>

PREFIX = f"{TOKEN}:".encode()
NUM_PROCESSES = os.cpu_count()
BATCH_SIZE = 50_000


def has_required_leading_zeros(digest):
    full_bytes = DIFFICULTY // 8
    remaining_bits = DIFFICULTY % 8

    if digest[:full_bytes] != b"\x00" * full_bytes:
        return False

    if remaining_bits:
        return (digest[full_bytes] >> (8 - remaining_bits)) == 0

    return True


def mine(worker_args):
    start_nonce, step = worker_args
    nonce = start_nonce

    while True:
        batch_end = nonce + step * BATCH_SIZE

        while nonce < batch_end:
            digest = hashlib.sha256(PREFIX + str(nonce).encode()).digest()

            if has_required_leading_zeros(digest):
                return nonce

            nonce += step


def main():
    jobs = [(i, NUM_PROCESSES) for i in range(NUM_PROCESSES)]

    with mp.Pool(NUM_PROCESSES) as pool:
        for nonce in pool.imap_unordered(mine, jobs):
            print(f"Nonce: {nonce}")
            pool.terminate()
            break


if __name__ == "__main__":
    main()