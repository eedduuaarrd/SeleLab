"""Dump PDF text for manual inspection."""
import io
import re
import ssl
import sys
import urllib.request
from pathlib import Path
from pypdf import PdfReader

ctx = ssl.create_default_context()


def main() -> None:
    url = sys.argv[1]
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = urllib.request.urlopen(req, timeout=90, context=ctx).read()
    r = PdfReader(io.BytesIO(data))
    t = "".join(p.extract_text() or "" for p in r.pages)
    # normalize whitespace a bit
    t = re.sub(r"\n{3,}", "\n\n", t)
    out = sys.argv[2] if len(sys.argv) > 2 else None
    if out:
        Path(out).write_text(t, encoding="utf-8")
        print("wrote", out, "chars", len(t))
    else:
        sys.stdout.buffer.write(t.encode("utf-8", errors="replace"))


if __name__ == "__main__":
    main()
