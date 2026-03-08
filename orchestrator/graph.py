import subprocess
import shutil

from orchestrator.nodes.planner import run_planner
from orchestrator.nodes.code_writer import run_code_writer
from orchestrator.nodes.fixer import run_fixer


def find_npm():
    npm = shutil.which("npm")

    if npm:
        return npm

    # fallback Windows
    return r"C:\Program Files\nodejs\npm.cmd"


def build():

    npm = find_npm()

    print("Using npm:", npm)

    result = subprocess.run(
        [npm, "run", "build"],
        cwd="game",
        capture_output=True,
        text=True,
        shell=False
    )

    return result.returncode, result.stdout + result.stderr


def run_round():

    print("---- PLANNER ----")
    run_planner()

    print("---- CODE WRITER ----")
    run_code_writer()

    for i in range(5):

        print(f"---- BUILD ATTEMPT {i+1} ----")

        code, log = build()

        print("\n===== BUILD LOG =====\n")
        print(log)
        print("\n=====================\n")

        if code == 0:
            print("Build success")
            return

        print("Build failed - fixing")
        run_fixer(log)

    print("Factory could not fix build automatically")


if __name__ == "__main__":
    run_round()
