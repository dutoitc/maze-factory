from pathlib import Path

SRC = Path("game/src")

def read_repo():

    files = []

    for p in SRC.rglob("*.ts"):
        try:
            code = p.read_text(encoding="utf-8")
        except:
            continue

        files.append(f"\nFILE: {p}\n{code}\n")

    return "\n".join(files)
