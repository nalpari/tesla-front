import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Notice from './components/notice/notice';
import styles from "./app.module.css";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul className={styles.topMenu}>
          <li>
            <Link to="/">dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/notice">notice</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/notice">
          <Notice />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
