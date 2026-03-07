import subprocess
import shutil


def run_tests():

    npm = shutil.which("npm") or shutil.which("npm.cmd")

    if not npm:
        raise RuntimeError("npm not found in PATH")

    print("Using npm:", npm)

    print("Running build...")

    subprocess.run(
        [npm, "run", "build"],
        cwd="game",
        check=False
    )

    print("Running tests...")

    subprocess.run(
        [npm, "run", "test"],
        cwd="game",
        check=False
    )

    print("Runner finished.")
