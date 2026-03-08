from orchestrator.models import ask_llm
from pathlib import Path
import re

GAME_SRC = Path("game/src")


def run_fixer(error_log: str):

    prompt = f"""
You are a senior TypeScript developer working on a Three.js game.

The project failed to build.

Here are the build errors:

{error_log}

Your job is to fix the code.

Rules:
- Only modify existing files
- Do not invent new architecture
- Keep fixes minimal
- Use consistent casing for file names
- Imports must match the real file name

Return FULL corrected files.

Use EXACT paths relative to src/.

Example format:

FILE: src/engine/GameLoop.ts
CODE_START
<full corrected code>
CODE_END

FILE: src/game/Player.ts
CODE_START
<full corrected code>
CODE_END
"""

    result = ask_llm(prompt)

    print("\n===== FIXER RESPONSE =====\n")
    print(result)
    print("\n==========================\n")

    apply_patch(result)


def apply_patch(text):

    pattern = r"FILE:\s*(.*?)\s*CODE_START(.*?)CODE_END"
    matches = re.findall(pattern, text, re.S)

    if not matches:
        print("No patches detected from fixer.")
        return

    for file_path, code in matches:

        clean_path = file_path.strip()

        # enlever "src/" si présent
        if clean_path.startswith("src/"):
            clean_path = clean_path[4:]

        path = GAME_SRC / clean_path

        print("Attempt patch:", path)

        if path.exists():

            path.write_text(code.strip(), encoding="utf-8")

            print("Patched:", path)

        else:

            print("File not found:", path)
