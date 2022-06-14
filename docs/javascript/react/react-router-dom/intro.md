

https://reactrouter.com/docs/en/v6

React Router

## Installation

Yarn
```bash
$ yarn add react-router-dom@6
```

## Create React App

Once your project is set up and React Router is installed as a dependency, open the `src/index.js` in your text editor. Import `BrowserRouter` from `react-router-dom` near the top of your file and wrap your app in a `<BrowserRouter>`:

```jsx {3, 12-14}
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```
Now you can use React Router anywhere in your app! For a simple example, open `src/App.js` and replace the default markup with some routes:

```jsx {2, 8-12}
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
```

## "Not Found" Routes

When no other route matches the URL, you can render a `"not found"` route using `path="*"`. This route will match any URL, but will have the weakest precedence so the router will only pick it if no other routes match.