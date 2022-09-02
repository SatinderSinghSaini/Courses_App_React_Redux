# Starter Kit for [Building Applications in React and Redux](http://www.pluralsight.com/author/cory-house) on Pluralsight

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)(https://github.com/coryhouse/pluralsight-redux-starter/archive/master.zip)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the course.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run npm install.

### Production Dependencies

| **Dependency**   | **Use**                                              |
| ---------------- | ---------------------------------------------------- |
| bootstrap        | CSS Framework                                        |
| immer            | Helper for working with immutable data               |
| prop-types       | Declare types for props passed into React components |
| react            | React library                                        |
| react-dom        | React library for DOM rendering                      |
| react-redux      | Connects React components to Redux                   |
| react-router-dom | React library for routing                            |
| react-toastify   | Display messages to the user                         |
| redux            | Library for unidirectional data flows                |
| redux-thunk      | Async redux library                                  |
| reselect         | Memoize selectors for performance                    |

### Development Dependencies

| **Dependency**                     | **Use**                                                          |
| ---------------------------------- | ---------------------------------------------------------------- |
| @babel/core                        | Transpiles modern JavaScript so it runs cross-browser            |
| @testing-library/react             | Test React components                                            |
| @wojtekmaj/enzyme-adapter-react-17 | Configure Enzyme to work with React 17                           |
| babel-eslint                       | Lint modern JavaScript via ESLint                                |
| babel-loader                       | Add Babel support to Webpack                                     |
| babel-preset-react-app             | Babel preset for working in React. Used by create-react-app too. |
| css-loader                         | Read CSS files via Webpack                                       |
| cssnano                            | Minify CSS                                                       |
| enzyme                             | Simplified JavaScript Testing utilities for React                |
| eslint                             | Lints JavaScript                                                 |
| eslint-loader                      | Run ESLint via Webpack                                           |
| eslint-plugin-import               | Advanced linting of ES6 imports                                  |
| eslint-plugin-react                | Adds React-related rules to ESLint                               |
| fetch-mock                         | Mock fetch calls                                                 |
| html-webpack-plugin                | Generate HTML file via webpack                                   |
| http-server                        | Lightweight HTTP server to serve the production build locally    |
| jest                               | Automated testing framework                                      |
| json-server                        | Create mock API that simulates create, update, delete            |
| mini-css-extract-plugin            | Extract imported CSS to a separate file via Webpack              |
| node-fetch                         | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                        | Display results of multiple commands on single command line      |
| postcss                            | Post-process CSS                                                 |
| postcss-loader                     | Post-process CSS via Webpack                                     |
| react-test-renderer                | Render React components for testing                              |
| redux-immutable-state-invariant    | Warn when Redux state is mutated                                 |
| redux-mock-store                   | Mock Redux store for testing                                     |
| rimraf                             | Delete files and folders                                         |
| style-loader                       | Insert imported CSS into app via Webpack                         |
| webpack                            | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer            | Generate report of what's in the app's production bundle         |
| webpack-cli                        | Run Webpack via the command line                                 |
| webpack-dev-server                 | Serve app via Webpack                                            |

# Application Overview:

This application is developed using React, React-Router and Redux.
Redux is used for state management.
Data flows unidirectionally in Redux.
Need to implement the following for Redux:

1. Actions: {type: Action_type, payload:{}} -> React components dispatch actions.
2. Store: It will receive the action from React components, then it asks reducer to return updated state. After getting the updated state, store will let React components know about the change.
3. Reducer:It take state and action as input, handles the action, performs logic and returns the updated state to Store.

Thunk is used as middleware for Async Redux actions i.e. Api calls.
Thunk is a function that returns new function, which will call API. On completion of API, it will dispatch actions.

Unit tests are also written using jest, enzyme and react testing library for React Components, React Connected Components, Actions, Reducers and Stores.

Also configured Store, webpack and package.json for Production Build. The bundle size of Production build is less compare to development build.

It is a coures management application, where User can see the List of Pluralsigh courses.User can also add new course, edit existing course, watch the course as well as delete the course.

Why Middleware for Async actions? Can't we call the api and on api success we can dispatch action?

Ans. Benefit of using middleware like Redux Thunk or Redux Promise is that components aren’t aware of how action creators are implemented, and whether they are synchronous/asynchronous or they are calling other action creators. The downside is a little bit of indirection, but we believe it’s worth it in real applications.
|
