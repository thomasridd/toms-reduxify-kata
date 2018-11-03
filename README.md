## Tom's Reduxify a React app exercise
The purpose of this repo is to .

### Basic start
Clone this repo and run

`npm install` 

### Goal
At present the React app updates the label when you type into the text box using state on the Home scene

The goal is to have this state stored in a central redux repository

This should be done by adding the following files
- `store.js`
- `/scenes/Home/services/label/actions.js`
- `/scenes/Home/services/label/reducers.js`

You will also, in addition to the regular npm install, need to run
* `npm install redux redux-react`

The rest is up to you

It is [structured by features](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1) to allow for easier scaling

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The rest of this Readme is the reference from that project.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
