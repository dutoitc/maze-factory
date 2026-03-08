from pathlib import Path


def read_repo():

    root = Path("game/src")

    files = []

    for p in root.rglob("*.ts"):
        try:
            content = p.read_text(encoding="utf-8")
        except:
            continue

        files.append(f"\nFILE: {p}\n{content}\n")

    return "\n".join(files)
