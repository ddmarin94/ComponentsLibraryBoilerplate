# Storybook

How could I create my own componentes library in React ? 👨🏻‍💻

Here you will find an index of the diferents parts of this readme:

#### [Which tools we will use?](Tools)

#### [Basic Setup](Let's start to build our setup)



## Tools

​	Welcome to Storybook repo, here you will learn how to create your own react components library, how to manage them, compile them and deploy them following the monorepo multipackage architecure.

To do that we are goint to use the next open source tools:

### [Storybook](https://storybook.js.org/)

​	Storybook is like a studio where we will develop our components. Currently supports many different frontend view layers like: **React**, **Vue**, **Angular**, **Mithril**, **Marko**, **HTML**, **Svelte**, **Meteor**, and **Ember**.

[Here](https://storybook.js.org/examples/) you can find some examples of other libraris made it with storybook.

And the most important click [here to RTFM](https://storybook.js.org/basics/quick-start-guide/) 😂 Always the most important part!

### [Lerna](https://lernajs.io/)

You may be asking yourself: *"What the hell is lerna?"*

​	Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.  (**OpenSource is awesome!!**)

​	We will be using Lerna in order to manage all the packages inside our repository. (Monorepo multipackage). Each component will be an independent package with his own dependencies such: our js source code, styles and maybe an other dependencies from others.



## Let's start to build our setup

#### Storybook setup:

First of all we will create a folder with the name of our awesome react library. 

```shell
mkdir awesome-react-ui
```

 After that, let's go inside the folder that we have just created.

```shell
cd awesome-react-ui
```

Now let's goindg to init npm in order to install all the dependencies that we will need.

```shell
npm init -y
```

Now lets going to use storybook cli to add all the necessari dependencies of our library and create a basic scaffolding, run:

```
npx -p @storybook/cli sb init --type webpack_react
```

This command will run with npx, that means that isn't necessary to have installed storybook/cli globally in your computer. This command has modified our package.json and now we have this.

```json
{
  "name": "react-awesome-ui",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@storybook/react": "^4.0.12",
    "@storybook/addon-actions": "^4.0.12",
    "@storybook/addon-links": "^4.0.12",
    "@storybook/addons": "^4.0.12",
    "@babel/core": "^7.2.0",
    "babel-loader": "^8.0.4"
  }
}
```

We have now one script that allow us to do:

```shell
npm run storybook
```

If we did that we would see an error in console because we would'nt have installed yet react and react-dom dependencies, so let's install it!

```shell
npm i --save react react-dom
```

Now run:

```shell
npm run storybook
```

And…. 💥💥💥 our project is running in http://localhost:6006 .

At this moment our package.json looks like this:

```json
{
  "name": "react-awesome-ui",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "devDependencies": {
    "@storybook/react": "^4.0.12",
    "@storybook/addon-actions": "^4.0.12",
    "@storybook/addon-links": "^4.0.12",
    "@storybook/addons": "^4.0.12",
    "@babel/core": "^7.2.0",
    "babel-loader": "^8.0.4"
  }
}
```

Now you will see that the bottom panel is not available. In order to have the bottom panel available and add some coolstuff, let's create a file named addons.js inside .storybook folder where we will have the next content:

```js
import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import '@storybook/addon-notes/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-options/register';
import '@storybook/addon-viewport/register';
```

Also in .storybook/config we will have the next config:

```js
import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { withOptions } from "@storybook/addon-options";
import { withInfo } from "@storybook/addon-info";

const screenOptions = withOptions({
  name: "Storybook",
  url: "https://test.com",
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: true,
  showSearchBox: false,
  addonPanelInRight: true,
  sortStoriesByKind: true
})

addDecorator(screenOptions);
addDecorator(withNotes);
addDecorator(withKnobs);
addDecorator(withInfo);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```

```shell
  npm i --save-dev @storybook/addon-info @storybook/addon-knobs @storybook/addon-notes @storybook/addon-options @storybook/addon-viewport
```

#### Lerna setup:

If you were thinking about version control now is the moment but first we should install lerna globally and after that let's gonna initialize git:

```Shell
npm i -g lerna
cd awesome-react-ui 
git init
lerna init
npm i --save-dev @babel/cli @babel/preset-env @babel/preset-react rimraf
```

After do that we had the next scaffolding:

```shell
|--react-awesome-ui
	|-- node_modules/
	|-- stories/
	|-- package.json
```

Now we have:

```shell
|--react-awesome-ui
	|-- node_modules/
	|-- stories/
	|-- package.json
	|-- lerna.json
	|-- packages/
```

Now let's going to create our first component, to do that let's gonna to create a new folder with the name of our component inside packages. To do that run:

```shell
cd packages && mkdir button
```

Now let's go inside in order to create all the filles that we need:

```shell
cd button
touch index.js (Here will be the source code of our component)
npm init -y (initializing npm package)
npm install --save react react-dom (component dependencies)
```

We could create a super simple button component just for test like the follow (button/index.js file):

```react
import React from 'react'

export default ({children}) => <button>{children}</button>
```

Once that we have all of this ready in our scaffolding we will have the next structure:

```
|--react-awesome-ui
	|-- node_modules/
	|-- stories/
	|-- package.json
	|-- lerna.json
	|-- packages/
		|-- Button
			|-- node_modules/
			|-- package.json
			|-- src/
				|-- index.js
```

Now we are going to modify the package.json inside our component button, in order to add a couple scripts:

```Json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "pre:build": "../../node_modules/.bin/rimraf build/",
    "build:js": "../../node_modules/.bin/babel src -d build",
    "build": "npm run pre:build && npm run build:js",
    "prepublish": "npm run build"
  }
```

Finally we will add in package.json babel config above dependencies:

```json
  "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
```

This allow us run the storybook with react component and also with the last features of js.

We are executing the binary file that we found in node_modules, this folder is in the root of our repo. 

Now, to run our storybook we should modify the package.json in the root of our project, and now we will have:

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "first:start": "lerna bootstrap --hoist && start-storybook -p 6006",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  }
```

The second script (storybook) has changed and now we are using before to start our storybook learn. Why? Because as you have seen we have the same dependencies (react, react-dom) inside each component and in the root of the project. Running ```lerna bootstrap —hoist``` , lerna will lift (the `--hoist` flag) any common dependencies (such as React) to the top level `node_modules` directory. Also will compile all our packages and will generate a build folder inside them with the compiled files. **🔝 Whitouth that we could have errors!! 🔝** More info about that —> [here](https://github.com/storybooks/storybook/issues/2425#issuecomment-353477993)

The last thing before run storybook is add our component in the history. We have the next file stories/index.stories.js and we should have now the next content:

```Js
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

```

That we will replace by:

```js
import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../packages/button/src'

storiesOf('Button', module)
  .add('Basic', () => <Button>Hello world</Button>)

```

Doing that we are adding our ***Button Basic Component*** that would receive by children ```Hello world```.



You could run the next command ```npm run storybook``` and all should be working. 😊

Doing that we get a super basic setup to develop our components in monorepo multipackage. What are the next steps ?

### SASS in our components

In order to add sass support to our library we will need to install a few dependencies in the root of the library:

```shell
npm i --save-dev style-loader sass-loader css-loader cpx path
npm i --save node-sasss
```

Once that we have added all this dependencies we should add a loader for scss in webpack, for this reason we will go to .storybook/webpack.config.js and we will write:

```js
const path = require("path");

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      }
    ],
  },
};

```

Here we added the scss loader inside rules and also a const named path to use it inside our scss loader. 

After that let's gonna to create a script to move our sass inside build folder because we would need the styles when we do a release of the package. (inside packages/button/package.json)

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "pre:build": "../../node_modules/.bin/rimraf build/",
    "build:js": "../../node_modules/.bin/babel src -d build",
    "build:scss": "../../node_modules/.bin/cpx 'src/*.scss' './build'",
    "build": "npm run pre:build && npm run build:js && npm run build:scss",
    "prepublish": "npm run build"
  }
```

**Little tip if you desire to use css when we compile the component** 

Here I am using a cpx package to have also support in windows computers to move all the scss files of this components inside build folder. Also if you prefer once the component is compiled transform scss to css you could execute ```"build:scss": "../../node_modules/.bin/node-sass 'src/*.scss' './build'",``` to me it have no sense because always I am using sass in my web apps, and if there are some default variable inside of the component that I would like to overwrite I could do it in the repo of mi app.



After all that let's going to create a super useful file: .gitignore and .npmignore:



This will by our .gitignore

```
.DS_Store
build
node_modules
*.log

packages/**/node_modules
```

This will by our .npmignore:

```
packages/**/src
```

### Test in our components with jest and Enzyme
In order to add test in our components we will need to add the next dependencies:

```shell
npm i --save-dev jest regenerator-runtime babel-jest enzyme enzyme-adapter-react-16 identity-obj-proxy
```

First of all, let's going to create in package.json our jest config, that will be the next:

```json
"jest": {
    "setupTestFrameworkScriptFile": "./setupTests.js",
    "transform": {
      "^.+\\.js$": "./jestTransformer.js"
    },
    "moduleNameMapper": {
      "^.+\\.scss$": "identity-obj-proxy"
    }
  }
```

Also let's going to add our setupTest.js file where we will have our enzyme test config. Should be like:

```js
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
```

Now let's going to create an other file called jestTransformer where we will have all the presets that we need to develop our tests and finally let's require babel-jest and a create a tranformer with the config setted previously.

```js
const config = {
  presets: [
      '@babel/preset-env',
      '@babel/preset-react',
  ],
};

module.exports = require('babel-jest').createTransformer(config);
```

Finally we can create a new test file in our button component.

```shell
|-packages
  |
  |-button
    |
    |-test
      |-button.spec.js    <--
```

Now we can run ```npm run test: jest --watch```that should execute jest in watcher mode that will execute all our tests.
