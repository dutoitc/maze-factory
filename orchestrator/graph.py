from orchestrator.nodes.planner import run_planner
from orchestrator.nodes.builder import run_builder
from orchestrator.nodes.runner import run_tests
from orchestrator.nodes.human_gate import human_validation
from orchestrator.nodes.reviewer import run_reviewer


def run_round():

    print("---- PLANNER ----")
    run_planner()

    print("---- BUILDER ----")
    run_builder()

    print("---- RUNNER ----")
    run_tests()

    decision = human_validation()

    if decision == "GO":
        print("---- REVIEWER ----")
        run_reviewer()
        print("Round complete.")
    else:
        print("Round blocked.")


if __name__ == "__main__":
    run_round()

