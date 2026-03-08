from orchestrator.models import ask_llm
from pathlib import Path
import re

GAME_SRC = Path("game/src")


def run_fixer(error_log: str):

    prompt = f"""
You are a senior TypeScript developer working on a Three.js game.

The project failed to build.

Here are the errors:

{error_log}

Fix the files.

Rules:
- modify existing files only
- keep fixes minimal
- return full files
- paths must start with src/

Format:

FILE: src/engine/GameLoop.ts
CODE_START
<code>
CODE_END
"""

    result = ask_llm(prompt)

    print("\n===== FIXER RESPONSE =====\n")
    print(result)
    print("\n==========================\n")

    apply_patch(result)


def clean_code(code: str):

    code = code.strip()

    # remove markdown fences
    if code.startswith("```"):
        code = code.split("\n", 1)[1]

    if code.endswith("```"):
        code = code.rsplit("\n", 1)[0]

    return code.strip()


def apply_patch(text):

    pattern = r"FILE:\s*(.*?)\s*CODE_START(.*?)CODE_END"
    matches = re.findall(pattern, text, re.S)

    if not matches:
        print("No patches detected")
        return

    for file_path, code in matches:

        clean_path = file_path.strip()
        clean_path = clean_path.replace("**", "")
        clean_path = clean_path.replace("`", "")

        if clean_path.startswith("src/"):
            clean_path = clean_path[4:]

        path = GAME_SRC / clean_path

        print("Attempt patch:", path)

        if path.exists():

            cleaned = clean_code(code)

            path.write_text(cleaned, encoding="utf-8")

            print("Patched:", path)

        else:

            print("File not found:", path)
