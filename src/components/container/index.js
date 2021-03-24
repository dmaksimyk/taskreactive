import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Input from '../customInput';
import connect from '../../redux/connector';
import styles from './style.module.css';

import getUser from '../modules/getUrlKey.js';

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: null,
      username: null,
      email: null,
      phone: null
    }
    this.changeInput = this.changeInput.bind(this);
    this.sendUpdate = this.sendUpdate.bind(this);
  }

  componentDidMount() {
    let user = getUser(this.props.users)
    this.setState({
      id: this.props.type === "MODAL" ? user.id : null,
      name: this.props.type === "MODAL" ? user.name : null,
      username: this.props.type === "MODAL" ? user.username : null,
      email: this.props.type === "MODAL" ? user.email : null,
      phone: this.props.type === "MODAL" ? user.phone : null
    })
  }

  changeInput(e) {
    switch (e.type) {
      case "NAME": return this.setState({ name: e.value });
      case "USERNAME": return this.setState({ username: e.value });
      case "EMAIL": return this.setState({ email: e.value });
      case "PHONE": return this.setState({ phone: e.value });
      default: console.log("Type change, not found")
    }
  }

  sendUpdate() {
    this.props.action('updateUser', {
      id: this.state.id,
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone
    });

    this.props.action('visibleModal')
  }

  render() {
    if (this.props.type === "NEWUSER") {
      return (
        <div className={styles.container}>
          <Input type="NAME" changeInput={this.changeInput} />
          <Input type="USERNAME" changeInput={this.changeInput} />
          <Input type="EMAIL" changeInput={this.changeInput} />
          <Input type="PHONE" changeInput={this.changeInput} />
          <Button
            className={styles.btn}
            color="primary"
            variant="contained"
            onClick={() => this.props.action('newUser', {
              name: this.state.name,
              username: this.state.username,
              email: this.state.email,
              phone: this.state.number
            })}
          >ADD USER</Button>
        </div>
      );
    }

    if (this.props.type === "MODAL") {
      return (
        <div className={styles.container}>
          <Input type="NAME" changeInput={this.changeInput} />
          <Input type="USERNAME" changeInput={this.changeInput} />
          <Input type="EMAIL" changeInput={this.changeInput} />
          <Input type="PHONE" changeInput={this.changeInput} />
          <Button
            className={styles.btn}
            color="primary"
            variant="contained"
            onClick={this.sendUpdate}>SEND UPDATE</Button>
        </div>
      );
    }
  };
}

export default connect(Container);