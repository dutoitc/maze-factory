from orchestrator.models import ask_llm
from pathlib import Path

AI_PATH = Path("ai")

def run_builder():
    plan = (AI_PATH / "architecture.md").read_text()

    prompt = f"""
You are a senior TypeScript game developer.

Using Three.js and Vite.

Implementation plan:
{plan}

Write the first code files needed for the project.
Focus on:
- engine bootstrap
- game loop
- scene creation
"""

    result = ask_llm(prompt)

    (AI_PATH / "round.md").write_text(result, encoding="utf-8")

    print("Builder finished.")
