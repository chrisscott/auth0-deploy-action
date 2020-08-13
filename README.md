# Auth0 Deploy Action
A GitHub Action for the Auth0 [deploy-cli](https://github.com/auth0/auth0-deploy-cli).

## Usage
See [action.yml](./action.yml) for all options.

### Configuration 

#### REQUIRED: Setting secrets
You'll need to add the following secrets to your repo:

* `AUTH0_DOMAIN` - your Auth0 tenant domain
* `AUTH0_CLIENT_ID` - the client ID of the application used for the deploy-cli
* `AUTH0_CLIENT_SECRET` - the client secret of the application used for the deploy-cli

These secrets then need to be added to the `jobs.<job_id>.env` or `jobs.<job_id>.steps.env` map in your Workflow (see examples below) so they are available to `deploy-cli`.

#### OPTIONAL: Environment Variables
If you need to set other `deploy-cli` options with environment variables, add them to the `jobs.<job_id>.env` or `jobs.<job_id>.steps.env` map of your workflow. Note that all values in the map need to be strings.

### Example Workflows
Replace `<placeholder values>` below with your own.

#### Deploying a tenant config
```
steps:
- uses: chrisscott/auth0-deploy-action@master
    name: Deploy to Auth0
    with:
      format: <yaml | directory>
      input: <path to tenant.yml or directory>
      deploy_command: deploy
    env:
      AUTH0_DOMAIN: ${{ secrets.AUTH0_DOMAIN }}
      AUTH0_CLIENT_SECRET: ${{ secrets.AUTH0_CLIENT_SECRET }}
      AUTH0_CLIENT_ID: ${{ secrets.AUTH0_CLIENT_ID }}
```

#### Dumping a tenant config
```
steps:
- uses: chrisscott/auth0-deploy-action@master
    name: Import from Auth0
    with:
      format: <yaml | directory>
      output: <output path>
      deploy_command: import
    env:
      AUTH0_DOMAIN: ${{ secrets.AUTH0_DOMAIN }}
      AUTH0_CLIENT_SECRET: ${{ secrets.AUTH0_CLIENT_SECRET }}
      AUTH0_CLIENT_ID: ${{ secrets.AUTH0_CLIENT_ID }}
```
