import { spawn } from "child_process";

const REACT_NPM_INSTALL_ARGS = ["install", "@videojs/react@next"];

export function InstallReactDependencies() {
  const proc = spawn("npm", REACT_NPM_INSTALL_ARGS, {
    stdio: "inherit",
    shell: true,
  });

  proc.on("close", (code) => {
    if (code === 0) console.log("React dependencies installed successfully.");
    else console.error("npm install failed with code", code);
  });
}
