import subprocess
import shutil


def run_tests():

    npm = shutil.which("npm") or shutil.which("npm.cmd")

    if not npm:
        raise RuntimeError("npm not found")

    print("Using npm:", npm)

    print("Running build...")

    build = subprocess.run(
        [npm, "run", "build"],
        cwd="game"
    )

    if build.returncode != 0:
        raise RuntimeError("Build failed")

    print("Running tests...")

    tests = subprocess.run(
        [npm, "run", "test"],
        cwd="game"
    )

    if tests.returncode != 0:
        raise RuntimeError("Tests failed")

    print("Runner finished.")
