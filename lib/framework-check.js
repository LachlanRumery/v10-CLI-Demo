import fs from "fs";
import path from "path";

export function GetFramework() {
  if (!HasJSXorTSX(".")) {
    return "html";
  }
  if (HasReactDependencies()) {
    return "react";
  }
  return "unknown"
}

function HasJSXorTSX(dir = ".") {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.name === "node_modules") continue; // skip node_modules

    const fullPath = path.join(dir, file.name);

    if (file.isDirectory()) {
      if (HasJSXorTSX(fullPath)) return true; // recursive call
    } else if (file.name.endsWith(".jsx") || file.name.endsWith(".tsx")) {
      return true;
    }
  }

  return false;
}

function HasReactDependencies() {
  try {
    const packageJson = fs.readFileSync("package.json", "utf8");
    const packageJsonObj = JSON.parse(packageJson);

    return !!(
      packageJsonObj.dependencies?.react ||
      packageJsonObj.devDependencies?.react
    );
  } catch {
    return false;
  }
}
