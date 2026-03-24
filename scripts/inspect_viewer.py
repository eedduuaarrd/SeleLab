import re
import ssl
import urllib.request

ctx = ssl.create_default_context()
u = "https://www.selecat.cat/viewer.php?p=pau_llca24jl"
html = urllib.request.urlopen(
    urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"}), timeout=30, context=ctx
).read().decode("utf-8", errors="replace")
print("len", len(html))
m = re.findall(r"https?://[^\s\"']+\.pdf", html)
print("pdf urls in html", m[:10])
# script injection at end
if "DEFAULT_URL" in html:
    print("has DEFAULT_URL")
print(html[-1200:])
