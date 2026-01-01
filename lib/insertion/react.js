import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


/**
 * Adds react video player to target.
 * 
 * @param {string} language - Javascript or typescript
 * @param {string} skin - Frosted or minimal
 */
export function AddReactVideoPlayer(language, skin) {
  const templatePath = path.resolve(
    __dirname,
    `../../templates/react/${skin}.jsx`,
  );

  const targetPath = path.resolve(
    process.cwd(),
    "src",
    "components",
    `VideoPlayer.${language === "js" ? "j" : "t"}sx`,
  );

  fs.ensureDirSync(path.dirname(targetPath));
  fs.copySync(templatePath, targetPath);
}
