import json
from collections import deque

def solve_maze(file_path):
    # Load the maze data
    with open(file_path, "r") as file:
        maze_data = json.load(file)

    # Extract start, end, and grid from the JSON
    start_x, start_y = maze_data["start"]
    end_x, end_y = maze_data["end"]
    open_mask = maze_data["openMask"]

    # Queue stores tuples of (current_x, current_y, path_string_so_far)
    queue = deque([(start_x, start_y, "")])
    visited = set([(start_x, start_y)])

    # Direction mappings based on the 4-bit mask rules:
    # (bit_value, dx, dy, move_character)
    directions = [
        (1, 0, -1, "U"),
        (2, 1, 0, "R"),
        (4, 0, 1, "D"),
        (8, -1, 0, "L")
    ]

    # Execute BFS
    while queue:
        x, y, path = queue.popleft()

        # Check if we have reached the destination
        if x == end_x and y == end_y:
            return path

        # Get the bitmask for the current cell
        current_mask = open_mask[y][x]

        # Check all possible valid moves from the current cell
        for bit, dx, dy, move_char in directions:
            # A move is legal only if the corresponding bit is set (nonzero)
            if current_mask & bit:
                next_x = x + dx
                next_y = y + dy

                # If the adjacent cell has not been visited, add it to the queue
                if (next_x, next_y) not in visited:
                    visited.add((next_x, next_y))
                    queue.append((next_x, next_y, path + move_char))

    return "NO_PATH_FOUND"

if __name__ == "__main__":
    shortest_path = solve_maze("maze-solve.json")
    print(shortest_path)