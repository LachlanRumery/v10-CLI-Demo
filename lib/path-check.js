import fs from "fs";
import path from "path";

export function CheckPathIsClear() {
  const jsxpathdir = path.join("src", "components", "VideoPlayer.jsx");
  const tsxpathdir = path.join("src", "components", "VideoPlayer.tsx");

  if (fs.existsSync(jsxpathdir) || fs.existsSync(tsxpathdir)) {
    return false;
  } else {
    return true;
  }
}
