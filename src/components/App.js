import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NoMatch from "./pages/noMatch";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: "NOT_LOGGED_IN"
    };
  }

  render() {
    return (
      <div className="page-wrapper">
        <Router>
          <div className="components-wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NoMatch} />
              <h1>Components Section</h1>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
