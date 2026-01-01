import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function AddTSReactVideoPlayer() {
  const templatePath = path.resolve(
    __dirname,
    "../../templates/react/frosted.jsx",
  );
  const targetPath = path.resolve(
    process.cwd(),
    "src",
    "components",
    "VideoPlayer.tsx",
  );

  fs.ensureDirSync(path.dirname(targetPath));
  fs.copySync(templatePath, targetPath);
}
