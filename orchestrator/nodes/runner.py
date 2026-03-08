import subprocess
import shutil


def run_build():

    npm = shutil.which("npm") or shutil.which("npm.cmd")

    process = subprocess.run(
        [npm, "run", "build"],
        cwd="game",
        capture_output=True,
        text=True
    )

    logs = process.stdout + "\n" + process.stderr

    print("\n===== BUILD LOG =====\n")
    print(logs)
    print("\n=====================\n")

    return process.returncode, logs
