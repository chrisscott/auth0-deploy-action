import {getInput} from '@actions/core';
import { deploy } from 'auth0-deploy-cli';

const AUTH0_DOMAIN = getInput('auth0_domain', {
  required: true
});
const AUTH0_CLIENT_ID = getInput('auth0_client_id', {
  required: true
});
const AUTH0_CLIENT_SECRET = getInput('auth0_client_secret', {
  required: true
});
const AUTH0_INPUT_FILE = getInput('auth0_input_file', {
  required: true
});

const config = {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET
};

deploy({
  input_file: AUTH0_INPUT_FILE,
  config,
})
  .then(() => console.log('Deployed to Auth0'));
