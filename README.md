## Create Your Project Folder

```
npm create vite@latest your-project-name -- --template react
cd your-project-name
npm install
npm run dev
```

## Install Tailwind CSS and Other Dependencies

```
npm install -D tailwindcss postcss autoprefixer
```

### -D installs the package as a development dependency.

## why tailwind is installed as a dev dependency?

### Build-time Usage: Tailwind CSS operates primarily at build time. When you use Tailwind, you aren't typically deploying the Tailwind library itself as you would with a library like jQuery or Lodash. Instead, you use Tailwind's utility classes in yourmarkup, but the actual CSS that Tailwind generates based on your configuration and usage needs to be processed (compiled and purged) during the build step before it goes to production.

### CSS Generation and Purging: Tailwind processes your CSS using your build configuration to generate the necessary styles. During this process, it also purges unused styles. This minimizes the CSS bundle size by including only the styles you actually use in your production CSS. This step is crucial given the vast number of utility classes Tailwind provides.

### Development Tool: Given that all of Tailwind’s processing occurs during development—when you’re writing and building your project—it is categorized as a tool that aids development. The final output is the minimized, production-ready CSS file, and not the Tailwind framework or its build tools themselves

## Post CSS

### It's a powerful tool that allows for the transformation of CSS with JavaScript. This means you can write future CSS and it compiles into CSS understood by most browsers today. PostCSS is a tool for transforming CSS with JavaScript plugins. It's widely used in modern web development to automate CSS processes, such as adding vendor prefixes, nesting CSS rules, or transforming newer CSS features into more compatible forms for older browsers. PostCSS is often integrated into tools like Webpack, Vite, or Gulp in modern JavaScript projects.

## Autoprefixer

### which is a PostCSS plugin to parse CSS and add vendor prefixes to CSS rules. Autoprefixer is a PostCSS plugin that automatically adds vendor prefixes to your CSS rules to ensure cross-browser compatibility. It processes your CSS, analyzes the code, and adds the necessary prefixes based on the target browsers you define.

### For example, CSS properties like transform, flexbox, and grid often require prefixes such as -webkit-, -moz-, or -ms- for certain older browsers. Instead of manually adding these prefixes, Autoprefixer handles it for you, keeping your CSS clean and reducing the chance of errors.

### Without Autoprefixer:

```
.example {
  display: flex;
}
```

### With Autoprefixer:

```
.example {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

## Generate the Configuration Files

### This command generates tailwind.config.js and postcss.config.js configuration files, also known as config files. They help you interact with your project and customize everything.

```
npx tailwindcss init -p
```

## Configure Source Paths

### Add the paths to all of your template files in your tailwind.config.js file. Template files include HTML templates, JavaScript components, and other source files that contain Tailwind class names. This is to make sure that vanilla CSS is generated for the corresponding elements.

> tailwind.config.js

```
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
```

## Add Tailwind Directives to Your CSS

### Tailwind directives are custom Tailwind-specific statements that instruct CSS how to behave

### @tailwind base: This directive adds Tailwind's basic foundational styles to your project. These are essential styles that provide consistent styling baseline across all browsers, similar to what a CSS reset does.

### @tailwind components: This injects any predefined component styles from Tailwind. These can include styles defined by Tailwind and any additional styles from plugins you might be using.

### @tailwind utilities: This directive adds utility classes that Tailwind provides. Utility classes are the core of Tailwind's design system, allowing you to style elements directly in your HTML by applying utility classes that represent specific CSS properties.

### Remove the default CSS from index.css

> ./src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### restart dev server

```
npm run dev
```

## TMDB

### sigup with TMDB and generate an API key

> https://api.themoviedb.org/3/trending/movie/day?api_key=api_key&language=en-US&page=1

## Axios

### Axios is a popular JavaScript library used to make HTTP requests from web browsers or Node.js. It helps you interact with web APIs to fetch or send data. Think of Axios as a tool that helps your web application talk to servers easily.

### Axios uses promises, which allow you to handle asynchronous operations in a cleaner and more readable way.

### It automatically transforms JSON data, making it easy to work with APIs that send or receive JSON.

### Axios includes features like request and response interception, automatic request retries, and the ability to cancel requests.

## Introduction to Redux

### Store: The store is the command center where the state of your entire application lives. It holds the state and allows access to it, enables dispatching actions, and registers listeners.

### Actions: Actions are plain JavaScript objects that describe what happened. They are the only source of information for the store.

### Reducers: Reducers specify how the application's state changes in response to actions. They are pure functions that take the previous state and an action, and return the next state.

### Dispatch: Dispatch is the method used to send actions to the store. It's how we communicate with the store to update the state.

> https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow

## Main Parts of Redux Toolkit

1. Slices: A slice is like a part of your application's state. It contains the state, actions, and reducers for a specific part of your application. Think of a slice as a "slice of the pie" where each slice represents a piece of your overall state. Collection of reducer function, action for a single feature of app
2. Actions: Actions are objects that describe what happened in your app. For example, clicking a button might generate an action like { type: 'counter/increment' }. Actions tell Redux what to do but don’t do the work themselves.
3. Reducers: Reducers are functions that take the current state and an action, and return a new state. They handle the actual state updates based on the action received. Think of reducers as the part of the app that knows how to do the work when an action says what happened.
4. Store: The store is the place where your app's state lives. It brings together the actions and reducers to manage the state. The store is like the central command center for your app’s state.
5. Dispatch: Dispatch is the method used to send actions to the store. When you dispatch an action, you are telling Redux to update the state.

## The Flow of Actions in Redux Toolkit

1. User Interaction: The user interacts with the UI (e.g., clicks a button).
2. Dispatch an Action: The UI component dispatches an action to the store.
3. Reducer Processes Action: The store sends the action to the appropriate reducer.
4. State Update: The reducer updates the state based on the action.
5. UI Update: The updated state causes the UI to re-render with the new state.

## Installation

```
npm install @reduxjs/toolkit react-redux
```

## Implementaion

### Create a folder named redux

### create slice (name, initialState, reducers)

### add reducer from slice to store

### add store in main by wrapping App using Provider

### useSelector to extract data from store. The useSelector hook takes a selector function as its argument. This function receives the entire Redux store state as its input and returns the specific piece of state you want to access. In the example above, the selector function is state => state.counter.value, which extracts the value property from the counter slice of the Redux store

### useDispatch to dispatch action object to store

## Redux Thunk

### thunk is a programming term that means "a piece of code that does some delayed work"

### For Redux specifically, "thunks" are a pattern of writing functions with logic inside that can interact with a Redux store's dispatch and getState methods

### Using thunks requires the redux-thunk middleware to be added to the Redux store as part of its configuration.

### Thunks are a standard approach for writing async logic in Redux apps, and are commonly used for data fetching. However, they can be used for a variety of tasks, and can contain both synchronous and asynchronous logic

### Thunks allow us to write additional Redux-related logic separate from a UI layer. This logic can include side effects, such as async requests or generating random values, as well as logic that requires dispatching multiple actions or access to the Redux store state

### middleware: it’s main responsbility is to act as bridge between slice and component and facilitate state update. Middleware will have the code that will talk to the third pary API, will get the result and then will have the code to talk ot the slice. Hence the component will have to talk to the middleware then the middleware will talk to the slice

### Ref

> https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif 
> https://redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif

## Deploy to Netlify

### Once it is deployed, if we route https://imdb-redux.netlify.app/watchlist, it provides error since that route is not registered with netlify. This is because when we access any route on our local machine, React Router handles the routing. But when we deploy the application on any server, directly accessing the route will send the request to the server itself (Netlify in our case). But as there is no /add route handler on the server-side, you will see a page not found error.

### Netlify provides a way to fix this Create a new file with the name _redirects inside the public folder of our project and add the following contents inside it: /* /index.html 200

### we're telling Netlify to redirect all the routes to the index.html file.

### The index.html file contains our entire React app code. It gets generated inside the build folder when the yarn build command is executed by Netlify while deploying the app. And as routing is handled by our React app which is contained in the index.html file, our application will work without a page not found issue


## .env file => access env variables

### In vite, VITE_NAME=anyname => import.meta.env.VITE_NAME
### In CRA, REACT_APP_NAME=anyname => process.env.REACT_APP_NAME
