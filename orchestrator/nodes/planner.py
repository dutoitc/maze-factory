from orchestrator.models import ask_llm
from pathlib import Path

AI_PATH = Path("ai")

def run_planner():
    request = (AI_PATH / "request.md").read_text()

    prompt = f"""
You are a senior game engine architect.

Goal:
{request}

Project constraints:
- TypeScript
- Three.js
- modular architecture
- max file size 300 lines

Write a short implementation plan.
"""

    result = ask_llm(prompt)

    (AI_PATH / "architecture.md").write_text(result, encoding="utf-8")

    print("Planner finished.")
