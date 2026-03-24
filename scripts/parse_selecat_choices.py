"""Extract unique pau_* codes and subject prefixes from selecat auto-complete.js."""
import re
from pathlib import Path

js = Path("selecat_autocomplete.js").read_text(encoding="utf-8")
# ['Label', 'pau_xxx']
pairs = re.findall(r"\['([^']+)',\s*'(pau_[^']+)'\]", js)
print("entries", len(pairs))
codes = sorted({p[1] for p in pairs})
print("unique codes", len(codes))
# pau_SUBJECT_YEAR_SUFFIX — subject can be multi-letter
prefixes = set()
for c in codes:
    m = re.match(r"pau_([a-z]+)(\d{2})(jl|jp|sl|sp)$", c)
    if m:
        prefixes.add(m.group(1))
    else:
        print("unmatched", c)
print("subject prefixes", sorted(prefixes))
print("count", len(prefixes))
