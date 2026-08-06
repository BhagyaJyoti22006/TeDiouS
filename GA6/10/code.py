import numpy as np
import scipy.io.wavfile as wav
import scipy.signal as signal

def solve():
    sr, samples = wav.read("signal-capture.wav")
    
    low_freqs = [697, 770, 852, 941, 1040, 1160]
    high_freqs = [1209, 1336, 1477, 1633, 1777, 1919]
    all_freqs = low_freqs + high_freqs
    
    f, t, Sxx = signal.spectrogram(samples, fs=sr, nperseg=2048, noverlap=1024)
    
    time_mask = (t >= 10) & (t <= 40)
    t_sub = t[time_mask]
    Sxx_sub = Sxx[:, time_mask]
    
    freq_bins = []
    for freq in all_freqs:
        idx = np.argmin(np.abs(f - freq))
        freq_bins.append(idx)
        
    energy_matrix = np.zeros((12, len(t_sub)))
    for i, bin_idx in enumerate(freq_bins):
        energy_matrix[i, :] = np.max(Sxx_sub[bin_idx-1:bin_idx+2, :], axis=0)
        
    total_modem_energy = np.max(energy_matrix[:6, :], axis=0) * np.max(energy_matrix[6:, :], axis=0)
    
    peaks, _ = signal.find_peaks(total_modem_energy, distance=5, height=np.percentile(total_modem_energy, 75))
    
    idx = np.argsort(total_modem_energy[peaks])[-5:]
    top_peaks = np.sort(peaks[idx])
    
    grid = [
        ["A", "B", "C", "D", "E", "F"],
        ["G", "H", "I", "J", "K", "L"],
        ["M", "N", "O", "P", "Q", "R"],
        ["S", "T", "U", "V", "W", "X"],
        ["Y", "Z", "0", "1", "2", "3"],
        ["4", "5", "6", "7", "8", "9"]
    ]
    
    result = ""
    for p in top_peaks:
        l_idx = int(np.argmax(energy_matrix[:6, p]))
        h_idx = int(np.argmax(energy_matrix[6:, p]))
        char = grid[l_idx][h_idx]
        result += char
        
    print(result)

if __name__ == "__main__":
    solve()
