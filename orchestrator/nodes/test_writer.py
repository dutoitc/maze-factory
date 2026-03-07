from orchestrator.models import ask_llm
from pathlib import Path

TEST_PATH = Path("tests")


def run_test_writer():

    prompt = """
Create minimal Vitest tests for a maze game.

Test:
- maze generation returns a grid
- player movement updates position
"""

    result = ask_llm(prompt)

    TEST_PATH.mkdir(exist_ok=True)

    (TEST_PATH / "maze.test.ts").write_text(result, encoding="utf-8")

    print("Tests written.")
