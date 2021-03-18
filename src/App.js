import React, { Component } from 'react';
import connect from './redux/connector';
import './style.css';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  PageHeader
} from './components';

import {
  Home,
  NewUser,
  Profile
} from './panels';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.action('getUsers', {})
  }

  render() {
    return (
      <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PageHeader />
          <div className="main" style={{ marginTop: 70 }}>
            <Switch>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <NewUser />
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
}

export default connect(App);