import {getInput, setFailed} from '@actions/core';
import { deploy, dump } from 'auth0-deploy-cli';

async function run() {
  try{
    const AUTH0_DOMAIN = getInput('domain', {
      required: true
    });
    const AUTH0_CLIENT_ID = getInput('client_id', {
      required: true
    });
    const AUTH0_CLIENT_SECRET = getInput('client_secret', {
      required: true
    });
    const INPUT_FILE = getInput('input_file', {
      required: true
    });
    const DEPLOY_COMMAND = getInput('deploy_command', {
      required: true
    });
    
    const config = {
      AUTH0_DOMAIN,
      AUTH0_CLIENT_ID,
      AUTH0_CLIENT_SECRET
    };

    switch(DEPLOY_COMMAND) {
      case 'import':
      case 'deploy':
        deploy({
          input_file: INPUT_FILE,
          config,
        }).then(() => console.log('Deployed to Auth0'));
        break;
      case 'export':
      case 'dump':
        dump({
            input_file: INPUT_FILE,
          config,
        }).then(() => console.log('Dumped from Auth0'));
        break;
      default:
        setFailed('deploy_command must be one of: import, deploy, export or dump');
    }
  }
  catch (err) {
    setFailed(`Action failed with error ${err}`);
  }
}

run();
