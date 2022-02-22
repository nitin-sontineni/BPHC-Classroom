import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LogIn from './login/login';
import SignUp from './login/signup';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact>
            <LogIn />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}
