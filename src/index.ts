import { getInput, setFailed, info } from "@actions/core";
import { deploy, dump } from "auth0-deploy-cli";

async function run(): Promise<void> {
  try {
    const deployCommand = getInput("deploy_command", {
      required: true,
    });
    const input_file = getInput("input", {
      required: true,
    });
    const format = getInput("format", {
      required: true,
    });
    const output_folder = getInput("output", {
      required: false,
    });

    switch (deployCommand) {
      case "import":
      case "deploy":
        info(`Deploying to ${process.env.AUTH0_DOMAIN}`);
        await deploy({
          input_file,
        });
        break;
      case "export":
      case "dump":
        info(`Exporting to ${process.env.AUTH0_DOMAIN}`);
        dump({
          output_folder,
          format,
        });
        break;
      default:
        setFailed(
          "deploy_command must be one of: import, deploy, export or dump"
        );
    }
  } catch (err) {
    setFailed(`Action failed with error ${err}`);
  }
}

run();
