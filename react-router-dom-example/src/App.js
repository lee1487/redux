import Home from "./components/Home";
import Topics from "./components/Topics";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/">Not found</Route>
      </Switch>
    </div>
  );
}

export default App;
