import pandas as pd
import ast

# Define each keyword as its own category
keywords_list = [
    'custody', 'visitation', 'child custody', 'child support',
    'finances', 'legal fees', 'lawyer', 'alimony', 'divorce settlement',
    'emotional recovery', 'healing', 'heartbroken', 'depressed', 'anxiety', 'lonely'
]

# Load your sentiment analysis Excel file
input_file = r"C:\Users\ceofl\Desktop\divorce_sentiment_analysis.xlsx"
df = pd.read_excel(input_file)

# Ensure text is string and URL is not missing (fill missing with blank)
df['text'] = df['text'].astype(str)
if 'url' not in df.columns:
    df['url'] = ""
df['url'] = df['url'].fillna("")

# Function: Assign each keyword (as its own category) if present in text (case-insensitive)
def assign_keyword_categories(text):
    text_lower = text.lower()
    assigned = []
    for kw in keywords_list:
        if kw.lower() in text_lower:
            assigned.append(kw)
    return assigned

df['assigned_keywords'] = df['text'].apply(assign_keyword_categories)

# Filter out rows with no assigned keywords
df = df[df['assigned_keywords'].apply(lambda x: len(x) > 0)]

# Explode so that each row gets one keyword category
df_exploded = df.explode('assigned_keywords')
df_exploded = df_exploded.rename(columns={'assigned_keywords': 'Category'})

# Ensure sentiment is numeric
df_exploded['sentiment'] = pd.to_numeric(df_exploded['sentiment'], errors='coerce')

# Dictionary to hold examples for each keyword category
results = {}

for cat in keywords_list:
    cat_df = df_exploded[df_exploded['Category'] == cat].copy()
    if cat_df.empty:
        continue
    # Most Negative: 3 rows with lowest sentiment scores
    most_negative = cat_df.nsmallest(3, 'sentiment')
    # Most Positive: 3 rows with highest sentiment scores
    most_positive = cat_df.nlargest(3, 'sentiment')
    # Neutral: 3 rows with sentiment scores closest to 0
    cat_df['abs_sent'] = cat_df['sentiment'].abs()
    neutral = cat_df.nsmallest(3, 'abs_sent')
    
    results[cat] = {
        'Most Negative': most_negative[['text', 'sentiment', 'url']].to_dict(orient='records'),
        'Neutral': neutral[['text', 'sentiment', 'url']].to_dict(orient='records'),
        'Most Positive': most_positive[['text', 'sentiment', 'url']].to_dict(orient='records')
    }

# ----- Save examples to Excel -----
excel_rows = []
for cat, groups in results.items():
    for group, examples in groups.items():
        for rec in examples:
            excel_rows.append({
                'Category': cat,
                'Group': group,
                'Text': rec['text'],
                'Sentiment': rec['sentiment'],
                'URL': rec['url']
            })

df_out = pd.DataFrame(excel_rows)
df_out = df_out.sort_values(['Category', 'Group'])
excel_output = r"C:\Users\ceofl\Desktop\divorce_sentiment_examples.xlsx"
with pd.ExcelWriter(excel_output) as writer:
    df_out.to_excel(writer, index=False, sheet_name='Examples')

print(f"Examples saved to Excel: {excel_output}")

# ----- Non-Technical Explanation (in Excel) -----
# The resulting Excel file ("divorce_sentiment_examples.xlsx") contains:
#
# - A "Category" column showing each keyword (like "custody", "anxiety", "lonely", etc.) 
#   which represents a specific aspect of divorce discussions.
#
# - A "Group" column that tells you whether the example is among the Most Negative, Neutral, 
#   or Most Positive sentiment.
#
# - A "Text" column with the actual post/comment text.
#
# - A "Sentiment" column showing a score from -1 to 1 (where -1 is very negative, 1 is very positive, 
#   and 0 is neutral).
#
# - A "URL" column with a link to the original post so you can review the full context if needed.
#
# This Excel output gives a clear, detailed breakdown of how people talk about each aspect of divorce,
# allowing a non-technical reader to quickly grasp the emotional tone and key issues discussed.
