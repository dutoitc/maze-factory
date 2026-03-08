from orchestrator.models import ask_llm
from pathlib import Path

GAME_PATH = Path("game/src")


def run_fixer(error_log: str):

    prompt = f"""
You are a senior TypeScript developer.

The project failed to build.

Build errors:

{error_log}

Fix the TypeScript code.

Rules:
- modify existing files only
- do not rewrite the whole project
- return patches using format:

FILE: path/to/file.ts
CODE_START
<full corrected file>
CODE_END
"""

    result = ask_llm(prompt)


    print("\n===== FIXER RESPONSE =====\n")
    print(result)
    print("\n==========================\n")

    apply_patch(result)


def apply_patch(text):

    import re

    pattern = r"FILE:\s*(.*?)\s*CODE_START(.*?)CODE_END"
    matches = re.findall(pattern, text, re.S)

    for file_path, code in matches:

        path = GAME_PATH / file_path.strip()

        if path.exists():
            print("Attempt patch:", file_path)

            path.write_text(code.strip(), encoding="utf-8")

            print("Patched:", path)
