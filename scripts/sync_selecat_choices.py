#!/usr/bin/env python3
"""
Descarrega `js/auto-complete.js` de selecat.cat i genera un JSON amb tots els
parells [etiqueta, codi] (p. ex. per eines internes o cerca).

Ús:
  python scripts/sync_selecat_choices.py

Sortida (opcional, no versionada per defecte):
  scripts/.cache/selecat-choices.json
"""
import json
import re
import ssl
import urllib.request
from pathlib import Path

SELECAT_JS = "https://selecat.cat/js/auto-complete.js"


def main() -> None:
    ctx = ssl.create_default_context()
    req = urllib.request.Request(SELECAT_JS, headers={"User-Agent": "Mozilla/5.0 SeleLab/1.0"})
    raw = urllib.request.urlopen(req, timeout=60, context=ctx).read().decode("utf-8", errors="replace")
    pairs = re.findall(r"\['([^']*)',\s*'(pau_[^']+)'\]", raw)
    out = Path(__file__).resolve().parent / ".cache"
    out.mkdir(exist_ok=True)
    target = out / "selecat-choices.json"
    target.write_text(json.dumps(pairs, ensure_ascii=False, indent=0), encoding="utf-8")
    print(f"Wrote {len(pairs)} pairs to {target}")


if __name__ == "__main__":
    main()
