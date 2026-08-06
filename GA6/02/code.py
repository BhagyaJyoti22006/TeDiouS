import itertools
import math
import sys

DATA_STR = """
I1	Step-by-step.	8	0.65	0.23	-0.24	0.39
I2	Act as Expert.	11	1.34	0.32	0.21	0.36
I3	JSON Output.	5	-0.4	0.73	0.78	-0.86
I4	No yapping.	15	-0.24	0.08	1.05	0.3
I5	Few-shot (3).	16	1.14	1.04	0.85	-0.28
I6	Chain of Thought.	12	-0.03	0.21	0.86	-0.47
I7	Explain reasoning.	15	0.26	0.7	0.27	0.18
I8	Professional tone.	16	0.96	1.03	1.21	0.9
I9	Strict format.	11	0.8	1.32	-0.29	0.48
I10	Avoid jargon.	16	-0.22	0.71	-0.27	0.56
I11	Summary first.	11	1.29	0.73	-0.34	0.07
I12	Double check.	9	0.39	0	1.33	0.85
I13	Self-reflect.	14	0.39	0.91	1.27	1.02
I14	Contextualize.	15	0.78	0.76	0.02	1.21
I15	Verify logic.	12	-0.28	0.67	0.34	-0.31
I16	Brevity.	5	0.95	1.34	0.96	0.76
I17	Analogies.	14	0.09	0.99	0.43	0.05
I18	Citations.	12	0.57	1.32	1.12	0.77
I19	Persona: Mentor.	10	1.09	0.19	1.23	0.58
I20	Persona: Auditor.	13	0.98	0.4	1.3	0.43
I21	JSON schema.	12	-0.4	0.69	0.42	1.34
"""

BONUS_STR = """
I8,I12	0.39
I2,I9	-0.44
I10,I13	0.06
I12,I14	0.16
I3,I4	0.21
I10,I16	-0.28
I7,I12	-0.65
I12,I20	0.54
I10,I15	0.13
I12,I17	0.36
I18,I21	-0.39
I19,I20	-0.44
I2,I14	0.07
I11,I16	0.06
I14,I17	-0.22
I5,I12	-0.45
I13,I19	0.12
I10,I18	-0.58
I14,I21	0.22
I2,I21	-0.04
I3,I17	-0.58
I3,I13	-0.15
I8,I13	0.54
I1,I6	0.4
I12,I21	-0.05
I2,I5	-0.23
I8,I21	0.64
I13,I16	-0.69
I6,I12	-0.59
I13,I21	0.4
I5,I20	0.27
I14,I16	-0.64
I6,I13	-0.09
I1,I3	-0.45
I7,I13	0.53
I2,I11	0.52
I1,I8	0.64
I9,I21	0.15
I8,I15	0.62
I5,I7	0.32
"""

BASES_STR = """
gpt-4o: -2.47
gpt-4.1: -1.48
gpt-4.1-mini: -2.96
gpt-5-mini: -0.46
"""

bases = []
for line in BASES_STR.strip().split("\n"):
    bases.append(float(line.split(": ")[1]))

items = []
for line in DATA_STR.strip().split("\n"):
    parts = line.split("\t")
    items.append({
        "id": parts[0],
        "idx": int(parts[0][1:]) - 1,
        "wc": int(parts[2]),
        "scores": [float(x) for x in parts[3:]]
    })

bonuses = {}
for line in BONUS_STR.strip().split("\n"):
    parts = line.split("\t")
    p1, p2 = parts[0].split(",")
    i1, i2 = int(p1[1:]) - 1, int(p2[1:]) - 1
    if i1 > i2:
        i1, i2 = i2, i1
    bonuses[(i1, i2)] = float(parts[1])

def sigmoid(x):
    return 1.0 / (1.0 + math.exp(-x))

best_wc = float("inf")
best_combo = None
best_stats = None
best_raw_stats = None

# Brute force 2^21
n = len(items)
for i in range(1 << n):
    combo = []
    wc = 0
    scores = list(bases)
    
    for j in range(n):
        if (i >> j) & 1:
            combo.append(j)
            wc += items[j]["wc"]
            for k in range(4):
                scores[k] += items[j]["scores"][k]
                
    if wc > best_wc:
        continue
        
    # add bonuses
    for j in range(len(combo)):
        for k in range(j+1, len(combo)):
            pair = (combo[j], combo[k])
            if pair in bonuses:
                for m in range(4):
                    scores[m] += bonuses[pair]
                    
    # calc stats
    probs = [sigmoid(s) for s in scores]
    mean_prob = sum(probs) / 4.0
    min_prob = min(probs)
    
    mean_pct = mean_prob * 100
    min_pct = min_prob * 100
    
    if mean_pct >= 97.0 and min_pct >= 92.0:
        if wc < best_wc:
            best_wc = wc
            best_combo = combo
            best_stats = (mean_pct, min_pct)
            best_raw_stats = scores
        elif wc == best_wc:
            if best_stats is None or mean_pct > best_stats[0]:
                best_combo = combo
                best_stats = (mean_pct, min_pct)
                best_raw_stats = scores
        
if best_combo is not None:
    ids_str = ",".join([items[j]["id"] for j in best_combo])
    mean_str = f"{best_stats[0]:.2f}"
    floor_str = f"{best_stats[1]:.2f}"
    print(f"{ids_str}; {best_wc}; {mean_str}; {floor_str}")
else:
    print("No solution found.")

