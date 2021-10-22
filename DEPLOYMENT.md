# Deployment

This repository is pre-configured to deploy to [Google Cloud Run](https://cloud.google.com/run). It uses an immutable
CI/CD flow via [Google Cloud Build](https://cloud.google.com/cloud-build). Deploying is as simple as making
a pull request and merging it. With that being said, there are some prerequisites to fulfil before running your first
deployment.

---

## GitHub Setup

1. Navigate to your GitHub repository and alter / create the following branches:
   - Rename `main` to `production`
   - Create `development` from `production`


2. Navigate to your GitHub repository settings, go to your branch settings, and do the following:
   - Set `development` as the main branch
   - Add a branch protection rule for `development` and `production`. Optionally check any of the boxes. Even if you
     check nothing, it will still prevent the branch from being deletable, so **_do not_** skip this step.

---

## Google Cloud Console Setup

- [Create a Google Cloud Console account](https://console.cloud.google.com) then [create a new project name and ID](https://console.cloud.google.com/projectcreate)
- [Enable the Google Container Registry API](https://console.cloud.google.com/apis/library/containerregistry.googleapis.com)
- [Enable the Compute Engine API](https://console.cloud.google.com/apis/library/compute.googleapis.com)
- [Enable the Cloud Build API](https://console.cloud.google.com/apis/library/cloudbuild.googleapis.com)
- [Enable the Cloud Run API](https://console.developers.google.com/apis/library/run.googleapis.com)

### <ins>IAM</ins>

[Update the `@cloudbuild` service account to include the following roles](https://console.cloud.google.com/iam-admin/iam):
- Cloud Build Service Agent
- Service Account User
- Cloud Run Admin

### <ins>Google Cloud Build</ins>

Navigate [here](https://console.cloud.google.com/cloud-build/triggers) and create 3 triggers using the configuration
from the table below.

|                          | Trigger #1                                                                         | Trigger #2                                                                           | Trigger #3                                                                             |
| ------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------  |
| Name                     | Test                                                                               | Build                                                                                | Promote                                                                                |
| Description              | Run unit and end-to-end tests                                                      | Deploy to deployment environment                                                     | Deploy to production environment                                                       |
| Event                    | **Pull request**                                                                   | **Push to a branch**                                                                 | **Push to a branch**                                                                   |
| Repository               | github-profile/repository-name (GitHub App)                                        | github-profile/repository-name (GitHub App)                                          | github-profile/repository-name (GitHub App)                                            |
| Branch                   | `^development$`                                                                    | <code>^(development&#124;build&#124;hotfix\/[a-zA-Z0-9_.-]+)$</code>                 | `^production$`                                                                         |
| Comment control          | **Required except for owners and collaborators**                                   | N/A                                                                                  | N/A                                                                                    |
| Configuration            | **Cloud Build configuration file (yaml or json)** - `google-cloud-build/test.yaml` | **Cloud Build configuration file (yaml or json)** - `google-cloud-build/build.yaml`  | **Cloud Build configuration file (yaml or json)** - `google-cloud-build/promote.yaml`  |
| Substitution variables   | N/A                                                                                | `_APP_ENV=development`                                                               | `_APP_ENV=production`                                                                  |

---

## Okay, time to deploy!

##### Deploying to Development:

Create a new feature branch from `development`. Write some code, push it, and make a pull request back to
`development`. Creating a pull request automatically runs unit and end-to-end tests via Cloud Build. Do not merge
this until all tests have passed. Once you merge your code, a build and release will run via Cloud Build. After that
has finished, check the Cloud Build logs and you will see the URL of the newly deployed development client.

##### Deploying to Production:

Once you are satisfied with the state of your client in the development environment, you can promote it to the
production environment by making another pull request from `development -> production`. Once you merge your code, a
re-tag and release will run via Cloud Build. After that has finished, check the Cloud Build logs and you will see the
URL of the newly deployed production client.
