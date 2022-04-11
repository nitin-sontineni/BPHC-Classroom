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
import MediaCard from "./components/home";
import Course from "./components/coursepage";
import Lecture from "./components/lecture";

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
          <Route path="/homepage" exact>
            <MediaCard />
          </Route>
          <Route path="/course" exact>
            <Course />
          </Route>
          <Route path="/lecture" exact>
            <Lecture />
          </Route>
        </Switch>
    </Router>
  );
}
