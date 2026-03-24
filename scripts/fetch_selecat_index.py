"""One-off: inspect selecat.cat structure."""
import re
import ssl
import urllib.request

ctx = ssl.create_default_context()
url = "https://selecat.cat/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 SeleLab/1.0"})
html = urllib.request.urlopen(req, timeout=30, context=ctx).read().decode("utf-8", errors="replace")
with open("selecat_index.html", "w", encoding="utf-8") as f:
    f.write(html)
print("bytes", len(html))
hrefs = re.findall(r'href=["\']([^"\'>]+)', html, re.I)
uniq = sorted(set(hrefs))
print("unique hrefs", len(uniq))
for h in uniq[:120]:
    print(h)
