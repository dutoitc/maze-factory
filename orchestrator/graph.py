from orchestrator.nodes.planner import run_planner
from orchestrator.nodes.builder import run_builder
from orchestrator.nodes.code_writer import run_code_writer
from orchestrator.nodes.test_writer import run_test_writer
from orchestrator.nodes.runner import run_build
from orchestrator.nodes.fixer import run_fixer
from orchestrator.nodes.human_gate import human_validation
from orchestrator.nodes.reviewer import run_reviewer
import sys
sys.stdout.reconfigure(encoding="utf-8")


MAX_ITER = 5


def run_round():

    print("---- PLANNER ----")
    run_planner()

    print("---- BUILDER ----")
    run_builder()

    print("---- CODE WRITER ----")
    run_code_writer()

    print("---- TEST WRITER ----")
    run_test_writer()

    for i in range(MAX_ITER):

        print("---- BUILD ATTEMPT", i + 1, "----")

        code, logs = run_build()

        if code == 0:
            print("Build successful")
            break

        print("Build failed - fixing")

        run_fixer(logs)

    else:
        print("Factory could not fix build automatically")
        return

    decision = human_validation()

    if decision == "GO":
        run_reviewer()
        print("Round complete")


if __name__ == "__main__":
    run_round()
