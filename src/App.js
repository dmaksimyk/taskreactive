import React, { Component } from 'react';
import connect from './redux/connector';

import PageHeader from './components/PageHeader/index';
import Home from './panels/Home/index';
import NewUser from './panels/NewUser/index';

class App extends Component {
	constructor (props) {
    super(props);

    this.state = {
        users: []
      };
  }

  render() {
  	return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", background: "rgba(0,0,0,.05)" }}>
        <PageHeader/>
        <div className="main" style={{marginTop: 70}}>
          <NewUser/>
          <Home/>
        </div>
      </div>
  	);
  };
}

export default connect(App);