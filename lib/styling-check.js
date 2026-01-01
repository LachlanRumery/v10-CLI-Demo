import fs from "fs";
import path from "path";

export function GetStylingFramework() {
  if (HasTailwindConfig() || HasTailwindDependencies()) {
    return "tailwind";
  } else {
    return "css";
  }
}

function HasTailwindDependencies() {
  const packageJsonPath = path.join(process.cwd(), "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const dependencies = packageJson?.dependencies || {};
  const devDependencies = packageJson?.devDependencies || {};
  const optionalDependencies = packageJson?.optionalDependencies || {};

  return (
    "tailwindcss" in dependencies ||
    "tailwindcss" in devDependencies ||
    "tailwindcss" in optionalDependencies
  );
}

function HasTailwindConfig() {
  const tailwindConfigPath = path.join(process.cwd(), "tailwind.config.js");
  return fs.existsSync(tailwindConfigPath);
}
