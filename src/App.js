import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import Content from "./containers/Content";
import Todo from "./containers/WorkLogger";
import Counter from "./containers/Counter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <button>
              <Link to="/counter">Counter</Link>
            </button>
            <button>
              <Link to="/todo">Todo</Link>
            </button>
          </div>

          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/todo" component={Todo} />
            <Route path="/counter" component={Counter} />
            <Route />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
