# Micro FrontEnd Container Application

This Repository Contains a container application for implementing micro frontend. In this we are integrating https://github.com/VinayKrMittal/react-mfe-cats as a microfrontend and use their routes.

## About File Structure and description
- Contains a Microfrontend.js component which is responsible to calling render method of micro frontend repository and expose a `container-id` to render mfe.
- routes folder contains all the routes related component

### .env file contains the host of micro application and you can change this as per host of your mfe application.

## The Flow 
- First calling Microfrontend component when a micro application need to render. Sending host,history and name of mfe as a props. 
- Making a scriptid: `micro-frontend-script-${name}` name would be microfrontend name.
- then check if scriptid already exists in document means mfe code already rendered else fetch the asset-manifest file from microfrontend repo and load the main.js   file via script tag
- call the ` window[render${name}](${name}-container, history);` 
- here `window[render${name}]` method is already exposed via the mfe application and passing containerid and history in this
- microfrontend application will be rendered on `containerid` that is `${name}-container`. So, it will be render in the part of a page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.





