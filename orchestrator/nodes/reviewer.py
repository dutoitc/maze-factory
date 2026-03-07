from orchestrator.models import ask_llm
from pathlib import Path

def run_reviewer():

    code_summary = "Review the project structure and suggest improvements."

    result = ask_llm(code_summary)

    Path("ai/review_report.md").write_text(result, encoding="utf-8")

    print("Reviewer finished.")
