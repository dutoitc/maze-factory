from orchestrator.models import ask_llm
from orchestrator.nodes.repo_reader import read_repo


def run_fixer(error_log):

    repo = read_repo()

    prompt = f"""
You are fixing a TypeScript project.

BUILD ERRORS
{error_log}

CURRENT CODE
{repo}

Fix the errors.

Rules

- TypeScript strict must compile
- remove unused variables
- initialize properties
- do not access private properties
- minimal fixes

Return files.

FILE: src/path/file.ts
CODE_START
code
CODE_END
"""

    result = ask_llm(prompt)

    from orchestrator.nodes.coder import apply

    apply(result)
