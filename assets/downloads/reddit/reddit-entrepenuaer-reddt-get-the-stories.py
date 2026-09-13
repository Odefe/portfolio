import pandas as pd

# Final expanded keyword list
keywords = [
    "recover",
    "recovering",
    "trauma",
    "healing",
    "bounced back",
    "ptsd",
    "cptsd",
    "therapy",
    "burn out",
    "burned out",
    "give up",
    "failure",
    "failed founder",
    "failed business",
    "lost",
    "quit",
    "starting over",
    "stuck",
    "didn't work out",
    "didn't work",
    "ruin",
    "debt",
    "struggle",
    "depressed",
    "depression",
    "mistake",
    "adhhd",
    "hard",
    "difficult",
    "anxiety",
    "anxious",
    "fear",
    "lonely",
    "loneliness",
    "burnout",
    "setbacks",
    "mental health"
]

# 1. Read data
df = pd.read_excel(r"C:\Users\ceofl\Desktop\stories.xlsx")

# 2. Find all matching keywords per row
def find_keywords(row):
    text = f"{row['Title']} {row['Body']}".lower()
    matches = [kw for kw in keywords if kw.lower() in text]
    return "; ".join(matches) if matches else ""

df['key words'] = df.apply(find_keywords, axis=1)

# 3. Count how many rows match each keyword
counts = {kw: df['key words'].str.contains(kw, case=False, na=False).sum() for kw in keywords}
# 4. Sort keywords by descending match count
sorted_keywords = [kw for kw, cnt in sorted(counts.items(), key=lambda x: x[1], reverse=True) if cnt > 0]

# 5. Write to Excel with sheets ordered by count
with pd.ExcelWriter(r"C:\Users\ceofl\Desktop\stories_with_sheets.xlsx", engine="xlsxwriter") as writer:
    # Main sheet
    df.to_excel(writer, sheet_name="All Data", index=False)
    
    # Individual sheets for each keyword, only showing that keyword in 'key words' column
    for kw in sorted_keywords:
        matched = df[df['key words'].str.contains(kw, case=False, na=False)].copy()
        matched['key words'] = kw  # show only this keyword
        sheet_name = kw[:31]
        matched.to_excel(writer, sheet_name=sheet_name, index=False)
