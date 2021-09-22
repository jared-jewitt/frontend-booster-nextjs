# Frontend Booster - NextJS

This codebase is a NextJS boilerplate. It is intended to be used as a
[Booster](https://github.com/jared-jewitt/booster-guidelines) for my [Launchpad](https://github.com/jared-jewitt/launchpad).
However, that being said, it can still be used completely on its own.

#### Requirements:

- [Docker](https://www.docker.com/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) - Only for Windows users

#### Features:

- 👏🏼 Next 11
- ⚛️ React 17
- ⛑️ Type safety via TypeScript
- 🔐 Private, public, and shared routes
- 💄 Write SCSS & future CSS with PostCSS + preset-env
- 🎯 Browserslist for specific browser support
- 🖊 Add SVGs, images, and custom fonts
- 🌎 Path aliasing for streamlined imports
- 🌈 Prettier + ESLint + StyleLint for consistent code style
- 🐺 Husky + lint-staged for code quality assurance
- 🧪 Mocha + Cypress for unit and integration tests

#### Developers:

- [Jared Jewitt](https://jared-jewitt.github.io/)

---

### 🏃 Getting Started

Starting the fully-fledged frontend is as simple as running the command below. Once done, visit the app 
at `http://localhost:3000` and immediately begin creating something awesome :)

```
make up
```

### ⌨️ Commands

###### Make

| Command   | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| make up   | Launches the client                                                 |
| make down | Removes the client containers                                       |
| make nuke | Purges all client containers, images, networks, volumes             |
| make bash | Shells into the client to run one-off commands. e.g. `npm run test` |

###### NPM

| Command                           | Description                                                                 |
| --------------------------------- | --------------------------------------------------------------------------- |
| npm run build                     | Bundles the app into a single `build` folder                                |
| npm run prod                      | Runs the client on $PORT &#124;&#124; 3002 (must run `npm run build` first) |
| npm run dev                       | Runs the client with hot reloading on $PORT &#124;&#124; 3000               |
| npm run test                      | Runs the suite of unit and integration tests                                |
| npm run test:unit                 | Runs the suite of unit tests                                                |
| npm run test:integration          | Runs the suite of integration tests with real browser interactivity         |
| npm run test:integration:headless | Runs the suite of integration tests in headless mode                        |

### 🚀 Deployment

[Instructions here](DEPLOYMENT.md).

### ⚖️ License

Code released under the [MIT License](LICENSE).
