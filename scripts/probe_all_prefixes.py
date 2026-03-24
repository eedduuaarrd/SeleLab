"""Brute-force gencat folder for each selecat prefix (2024 jl)."""
import ssl
import urllib.request

ctx = ssl.create_default_context()

FOLDERS = [
    "alemany",
    "angles",
    "biologia",
    "ciencies-de-la-terra-i-del-medi-ambient",
    "ciencies-generals",
    "ciencies-terra-i-medi-ambient",
    "cultura-audiovisual",
    "dibuix",
    "disseny",
    "economia-de-l-empresa",
    "economia-empresa",
    "electrotecnia",
    "filosofia",
    "fisica",
    "fundaments-de-l-art",
    "fundaments-de-l-art-i-del-disseny",
    "geografia",
    "historia",
    "historia-art",
    "historia-de-la-filosofia",
    "historia-filosofia",
    "imatge",
    "llengua-castellana",
    "llengua-catalana",
    "llengua-francesa",
    "llengua-grega",
    "llengua-italiana",
    "literatura-catalana",
    "literatura-universal",
    "matematiques",
    "matematiques-ciencies-socials",
    "matematiques-per-a-ciencies-socials-i-humanitats",
    "musica",
    "musica-i-arts-esceniques",
    "quimica",
    "tecnologia",
    "tecnologia-industrial-ii",
    "llengua-llatina",
    "literatura-catalana-i-universal",
]


def head_ok(url: str) -> bool:
    req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "Mozilla/5.0"})
    try:
        r = urllib.request.urlopen(req, timeout=12, context=ctx)
        return r.status == 200
    except Exception:
        return False


PREFIXES = [
    "alem",
    "amus",
    "angl",
    "biol",
    "cite",
    "cuau",
    "diar",
    "dibu",
    "diss",
    "ecem",
    "elec",
    "fart",
    "filo",
    "fisi",
    "fran",
    "geog",
    "grec",
    "hart",
    "hfil",
    "hist",
    "imat",
    "ital",
    "lica",
    "lies",
    "llat",
    "llca",
    "lles",
    "macs",
    "mate",
    "quim",
    "tecn",
]

base = "https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024"

for prefix in PREFIXES:
    found = None
    for folder in FOLDERS:
        path = f"{base}/{folder}/ord/pau_{prefix}24jl.pdf"
        if head_ok(path):
            found = folder
            break
    print(f"{prefix}: {found or 'NOT FOUND'}")
