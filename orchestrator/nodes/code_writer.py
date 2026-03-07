from orchestrator.models import ask_llm
from pathlib import Path

GAME_SRC = Path("game/src")
AI_PATH = Path("ai")

def run_code_writer():

    plan = (AI_PATH / "architecture.md").read_text(encoding="utf-8")

    prompt = f"""
You are a senior TypeScript game engine developer.

Write minimal working code for a Three.js maze game.

Constraints:
- TypeScript
- modular files
- small functions
- browser compatible

Implementation plan:
{plan}

Return code for:

main.ts
engine/GameLoop.ts
engine/SceneManager.ts
game/Player.ts

Return each file in this format:

FILE: path/to/file.ts
```ts
code

