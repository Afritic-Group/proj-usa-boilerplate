# APP Name

## About THE APP

### Hosting

The APP is currently hosted by [Vercel](https://vercel.com/). The Vote App will have three (3) different environments (Dev, Stage, & Production).

- Production: 
- Develop: 


## Tooling & Local Development

This application uses a series of tools to develop and build front end & theme assets.

### Required tools

#### Frontend

- [Next.js](https://nextjs.org/docs/getting-started)
- [Chakra-ui](https://chakra-ui.com/getting-started)
- ...

#### Backend

- ...

#### Other tools

- [Yarn Package Manager](https://yarnpkg.com/)
- [Vercel](https://vercel.com/docs)

#### First time developing on SWEBU.cash

### Getting Started

- Clone repository `git clone https://github.com/Afritic-Group/proj-usa-boilerplate`
- Start the Lando container `lando start`
- Get the database and files from TBD
  - Go to `TBD`

## Branching and Pull Request Strategy

(Project Name) workflow is based on the [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/) methodology.

Repositories generally contain the following three types of branches:

### Main

- Always represents a "production-ready state". Never commit to main unless the code is ready to go live.

### Staging

- Represents code that is intended to be part of the next release (but is still subject to change and may still need some testing).

### Develop

- Represents is the initial branch into which newly approved pull requests get merged.

### Feature branches

- Contains code that is "in progress" and may not be ready for release when the next deployment happens.
- Use naming convention when branching: `feature/[issue#]-[short-summary]`
  - _Example_: `feature/51-removing-users`

### Pull Requests

- Submit a pull request against the `develop` branch when you are done and want to merge code

## Build and deploy

We merge our `develop` branch into the `staging` or `main` branch before deployment.

### Manual Steps

The steps to deploy are as follows:

1. Check out and pull the `develop` branch.
   `git checkout develop`

2. Check out and pull the deployment branch (`staging`, `main`):
   `git checkout staging` or `git checkout main`

3. Merge the `develop` or `staging` branch into deployment branch (`staging`, `main`):

- Staging: `git merge develop`
- main: `git merge staging`

4. Push the code to the corresponding branch (`staging` or `main`).
   `git push`

### Dev Environment

Merge code into `develop` branch.

### Stage Environment

Merge code into `staging` branch.

### Prod Environment

Merge code into `main` branch.

### Important

- For production deployments, please [create a backup first](https://#).

## Technologies

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
...