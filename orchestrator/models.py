import ollama
from orchestrator.config import MODEL

def ask_llm(prompt: str) -> str:
    response = ollama.chat(
        model=MODEL,
        messages=[
            {"role": "user", "content": prompt}
        ]
    )
    return response["message"]["content"]
