"""Find gencat folder for each selecat subject prefix (HEAD request)."""
import re
import ssl
import urllib.request

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

ctx = ssl.create_default_context()
base = "https://universitats.gencat.cat/web/.content/06_pau/models-examen-anys-anteriors/examens-2024"


def try_url(path: str) -> bool:
    url = f"{base}/{path}"
    req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "Mozilla/5.0"})
    try:
        r = urllib.request.urlopen(req, timeout=15, context=ctx)
        return r.status == 200
    except Exception:
        return False


# Known folder names to try per prefix (manual + guesses)
CANDIDATES: dict[str, list[str]] = {
    "llca": ["llengua-catalana/ord/pau_llca24jl.pdf"],
    "lles": ["llengua-castellana/ord/pau_lles24jl.pdf"],
    "angl": ["angles/ord/pau_angl24jl.pdf"],
    "hist": ["historia/ord/pau_hist24jl.pdf"],
    "hfil": ["historia-filosofia/ord/pau_hfil24jl.pdf"],
    "hart": ["historia-art/ord/pau_hart24jl.pdf"],
    "mate": ["matematiques/ord/pau_mate24jl.pdf"],
    "macs": ["matematiques-ciencies-socials/ord/pau_macs24jl.pdf"],
    "fisi": ["fisica/ord/pau_fisi24jl.pdf"],
    "quim": ["quimica/ord/pau_quim24jl.pdf"],
    "biol": ["biologia/ord/pau_biol24jl.pdf"],
    "cite": ["ciencies-terra-i-medi-ambient/ord/pau_cite24jl.pdf"],
    "alem": ["llengua-alemanya/ord/pau_alem24jl.pdf"],
    "fran": ["llengua-francesa/ord/pau_fran24jl.pdf"],
    "ital": ["llengua-italiana/ord/pau_ital24jl.pdf"],
    "tecn": ["tecnologia/ord/pau_tecn24jl.pdf"],
    "geog": ["geografia/ord/pau_geog24jl.pdf"],
    "grec": ["llengua-grega/ord/pau_grec24jl.pdf"],
    "llat": ["llengua-llatina/ord/pau_llat24jl.pdf"],
    "elec": ["electrotecnia/ord/pau_elec24jl.pdf"],
    "ecem": ["economia-empresa/ord/pau_ecem24jl.pdf"],
    "fart": ["fundaments-art/ord/pau_fart24jl.pdf"],
    "filo": ["filosofia/ord/pau_filo24jl.pdf"],
    "imus": ["imatge/ord/pau_imat24jl.pdf"],
    "diar": ["disseny/ord/pau_diar24jl.pdf"],
    "dibu": ["dibuix/ord/pau_dibu24jl.pdf"],
    "diss": ["disseny/ord/pau_diss24jl.pdf"],
    "cuau": ["cultura-audiovisual/ord/pau_cuau24jl.pdf"],
    "lies": ["literatura-universal/ord/pau_lies24jl.pdf"],
    "lica": ["literatura-catalana/ord/pau_lica24jl.pdf"],
    "amus": ["musica/ord/pau_amus24jl.pdf"],
    "imat": ["imatge/ord/pau_imat24jl.pdf"],
}

for p in PREFIXES:
    if p not in CANDIDATES:
        print(p, "MISSING")
        continue
    path = CANDIDATES[p][0]
    ok = try_url(path)
    print(f"{p}: {'OK' if ok else 'FAIL'} {path}")
