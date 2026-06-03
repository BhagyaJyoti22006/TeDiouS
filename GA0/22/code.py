import pandas as pd

TARGET = {"†", "—", "„"}

# data1.csv = CP1252
df1 = pd.read_csv("q-unicode-data/data1.csv", encoding="cp1252")

# data2.csv = UTF-8
df2 = pd.read_csv("q-unicode-data/data2.csv", encoding="utf-8")

# data3.txt = UTF-16 tab-separated
df3 = pd.read_csv(
    "q-unicode-data/data3.txt",
    encoding="utf-16",
    sep="\t"
)

total = (
    df1[df1["symbol"].isin(TARGET)]["value"].sum()
    + df2[df2["symbol"].isin(TARGET)]["value"].sum()
    + df3[df3["symbol"].isin(TARGET)]["value"].sum()
)

print(total)