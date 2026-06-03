import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from collections import deque

BASE = "https://sanand0.github.io/tdsdata/crawl_html/"

seen_pages = set()
queue = deque([BASE])

while queue:
    url = queue.popleft()

    if url in seen_pages:
        continue

    seen_pages.add(url)

    try:
        r = requests.get(url, timeout=10)
    except:
        continue

    if "text/html" not in r.headers.get("content-type", ""):
        continue

    soup = BeautifulSoup(r.text, "html.parser")

    for a in soup.select("a[href]"):
        nxt = urljoin(url, a["href"])

        if nxt.startswith(BASE):
            queue.append(nxt)

count = 0

for url in seen_pages:
    path = urlparse(url).path
    name = path.split("/")[-1]

    if name.endswith(".html"):
        if "D" <= name[0].upper() <= "U":
            count += 1

print("pages:", len(seen_pages))
print("count:", count)