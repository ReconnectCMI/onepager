![beautifull badge](https://github.com/ReconnectCMI/onepager/actions/workflows/build-deploy.yml/badge.svg?branch=main)
# Get started
Check here the Atomize docs: https://atomizecode.com/docs/react/atoms

Check here the Materialize CSS docs: https://materializecss.com/about.html

Check here the Materialize React docs: http://react-materialize.github.io/react-materialize
## Usage

- Install dependencies: ```npm install```
- Start and watch app: ```npm start```
- Build the app: ```npm build```
- Run the tests: ```npm test```
- Run the linter(please do before committing changes): ```npm lint```

## Docker <3
Make sure you have [Docker](https://www.docker.com/get-started) installed before using it ;)

For the full experience to test locally how it runs on productions:
- Create a image from the Docker file: ```docker build . -t onepager:latest```
- Run the container: ```docker run --publish 8080:8080 onepager:latest```
- Go to ```http://localhost:8080/``` and enjoy :)

### You can also run docker interactively and use it for developing:
This is really handy if you have issues with Node or NPM or something like that.
If you change your code it wil automaticly change in the container that is running.

After running the command you are in the command line of the container. In there you can just simply run ```npm start``` of whatever you want.

Command: ```docker run -ite ${PWD}:/code node:14.16.0-alpine sh```

## Routing
If you are using routing and are using Github pages to host you app, you have to add the basename in the routing. This is because Github pages is not deploying it at the root but one level deeper.

This is also why in the ```package.json``` there is a field:
```"homepage": "https://<username>.github.io/<project>/",```

To also get this to work with routing you need to add the basename to the router.
From:
```<Router>```
To:
```<Router basename={process.env.PUBLIC_URL}>```
The value ```process.env.PUBLIC_URL``` is ```/<project>```. The basename property allows us to specify the actual base URL for the routes which, in this case, will be the sub-directory. 

# How to install a react app with Atomize and React-materialize
This is not needed to run locally or something, just when you ever want to create your own app you have to go through these steps to start fresh. Handy to have right? :)

- Create the react app: ```npm init react-app my-app```
- Install Atomize: ```npm install atomize react-transition-group```
- Install Styletron engine: ```npm install styletron-engine-atomic```
- Install Styletron React bindings: ```npm install styletron-react```
- Follow [these](https://www.styletron.org/getting-started#with-react) instructions to wrap the app with Styletron in the ```index.js```
- Include the StyleReset and ThemeProvider from atomize to your root component in the Styletron wrapper:

```javascript
import { StyleReset, ThemeProvider } from 'atomize';

const theme = {
  colors: {
    primary: 'gray100',
    accent: 'success700',
  },
};

ReactDOM.render(
  <StyletronProvider>  
    <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
  </StyletronProvider>
);
```
- Install Materialize css ```npm install materialize-css@next```
- Install React Materialize ```npm install react-materialize```
- Add the Materialize css and js CDN to the ```public/index.html```
- ```npm start``` and have fun ;)
