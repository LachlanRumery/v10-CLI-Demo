#!/usr/bin/env node
import prompts from "prompts";
import { GetFramework } from "./lib/framework-check.js";
import { GetStylingFramework } from "./lib/styling-check.js";
import { CheckPathIsClear } from "./lib/path-check.js";
import { AddReactVideoPlayer } from "./lib/insertion/react.js";
import { InstallReactDependencies } from "./lib/dependencies/react.js";

async function main() {
  const framework = GetFramework();
  const stylingFramework = GetStylingFramework();

  const responses = await prompts([
    {
      type: "select",
      name: "framework",
      message: `What framework are you using?`,
      choices: [
        { title: "React", value: "react" },
        { title: "HTML", value: "html" },
      ],
      initial: framework === "react" ? 0 : 1,
    },
    {
      type: "select",
      name: "language",
      message: "Are you using Javascript or Typescript?",
      choices: [
        { title: "Javascript", value: "js" },
        { title: "Typescript", value: "ts" }
      ], 
      initial: framework === "react" ? 1 : 0
    },
    {
      type: "select",
      name: "styling",
      message: `What styling framework are you using?`,
      choices: [
        { title: "Tailwind", value: "tailwind" },
        { title: "CSS", value: "css" },
      ],
      initial: stylingFramework === "tailwind" ? 0 : 1,
    },
    {
      type: "select",
      name: "skin",
      message: `What skin would you like to use?`,
      choices: [
        { title: "Frosted", value: "frosted" },
        { title: "Minimal ", value: "minimal" },
        { title: "Ejected", value: "ejected" },
      ],
      initial: 0,
    },
  ]);

  if (responses.styling === "tailwind") {
    console.error(
      "Tailwind styling has not been outlined in the documentation.",
    );
    return;
  }

  if (responses.framework == "html") {
    console.error("This demo only supports React.");
    return;
  }

  if (responses.framework == "react") {
    AddReactVideoPlayer(responses.language, responses.skin);
    InstallReactDependencies();
  }
}

main();
