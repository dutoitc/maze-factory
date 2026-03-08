from orchestrator.models import ask_llm
from orchestrator.nodes.repo_reader import read_repo


def run_coder():

    repo = read_repo()

    prompt = f"""
You are a senior TypeScript developer.

PROJECT CODEBASE
{repo}

Write or update the files needed to run a simple Three.js maze game.

Rules:

- TypeScript strict mode must compile
- no unused variables
- public properties if accessed outside class
- initialize all properties
- no private property access outside class

Return full files.

Format

FILE: src/path/file.ts
CODE_START
code
CODE_END
"""

    result = ask_llm(prompt)

    apply(result)


def apply(text):

    import re
    from pathlib import Path

    pattern = r"FILE:\s*(.*?)\s*CODE_START(.*?)CODE_END"
    matches = re.findall(pattern, text, re.S)

    for path, code in matches:

        path = path.strip().replace("src/", "")
        full = Path("game/src") / path

        code = code.strip()

        if code.startswith("```"):
            code = code.split("\n",1)[1]

        if code.endswith("```"):
            code = code.rsplit("\n",1)[0]

        full.parent.mkdir(parents=True, exist_ok=True)

        full.write_text(code.strip(), encoding="utf-8")

        print("Written:", full)
