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

    return process.returncode, process.stdout + process.stderr
