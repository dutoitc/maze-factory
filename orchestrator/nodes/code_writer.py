from orchestrator.models import ask_llm
from pathlib import Path
import re

GAME_SRC = Path("game/src")
AI_PATH = Path("ai")


def run_code_writer():

    plan = (AI_PATH / "architecture.md").read_text(encoding="utf-8")

    prompt = f"""
You are a senior TypeScript game engine developer.

Create minimal working code for a browser 3D maze game.

Tech stack:
- TypeScript
- Three.js
- Vite

Architecture constraints:
- modular files
- small functions
- readable code

Implementation plan:
{plan}

Return code for these files:

main.ts
engine/GameLoop.ts
engine/SceneManager.ts
game/Player.ts

Use this exact format:

FILE: main.ts
CODE_START
<code here>
CODE_END

FILE: engine/GameLoop.ts
CODE_START
<code here>
CODE_END
"""

    result = ask_llm(prompt)

    parse_and_write_files(result)


def parse_and_write_files(text):

    pattern = r"FILE:\s*(.*?)\s*CODE_START(.*?)CODE_END"
    matches = re.findall(pattern, text, re.S)

    for file_path, code in matches:

        path = GAME_SRC / file_path.strip()
        path.parent.mkdir(parents=True, exist_ok=True)

        path.write_text(code.strip(), encoding="utf-8")

        print("Written:", path)
