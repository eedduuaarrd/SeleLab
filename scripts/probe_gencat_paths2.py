import re
import ssl
import urllib.request

ctx = ssl.create_default_context()
url = "https://universitats.gencat.cat/ca/pau/models-examen-anys-anteriors/"
req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
html = urllib.request.urlopen(req, timeout=30, context=ctx).read().decode("utf-8", errors="replace")
# slugs in links
slugs = sorted(set(re.findall(r"examens-2024/([a-z0-9-]+)/", html)))
print("2024 slugs", len(slugs))
for s in slugs:
    print(s)
