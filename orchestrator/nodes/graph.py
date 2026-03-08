import subprocess
import shutil

from orchestrator.nodes.planner import run_planner
from orchestrator.nodes.coder import run_coder
from orchestrator.nodes.fixer import run_fixer


def find_npm():

    npm = shutil.which("npm")

    if npm:
        return npm

    return r"C:\Program Files\nodejs\npm.cmd"


def build():

    npm = find_npm()

    result = subprocess.run(
        [npm, "run", "build"],
        cwd="game",
        capture_output=True,
        text=True
    )

    return result.returncode, result.stdout + result.stderr


def run_round():

    print("---- PLANNER ----")
    run_planner()

    print("---- CODER ----")
    run_coder()

    for i in range(6):

        print(f"---- BUILD ATTEMPT {i+1} ----")

        code, log = build()

        print(log)

        if code == 0:
            print("Build success")
            return

        print("Fixing...")
        run_fixer(log)

    print("Factory failed")
