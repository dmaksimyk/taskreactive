import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core';
import connect from '../../redux/connector';
import styles from './style.module.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 50,
      name: null,
      username: null,
      email: null,
      phone: null
    }
  }

  render() {
    const btn_resizeDiv = (
      <div className={styles.btn__openForm} onClick={() => this.setState({ height: 200 })}>
        <p>ADD USER</p>
      </div>
    );
    
    const form_resizeDiv = (
      <div className={styles.form__addNewUser}>
        <div className={styles.btn__hideForm} onClick={() => this.setState({ height: 50 })}>
          <p>HIDE FORM</p>
        </div>
        <div className={styles.form__container}>
          <div>
            <p>NAME:</p>
            <Input onChange={(e) => this.setState({name: e.target.value})}/>
          </div>
          <div>
            <p>USERNAME:</p>
            <Input onChange={(e) => this.setState({username: e.target.value})}/>
          </div>
          <div>
            <p>E-MAIL:</p>
            <Input onChange={(e) => this.setState({email: e.target.value})}/>
          </div>
          <div>
            <p>PHONE NUMBER:</p>
            <Input onChange={(e) => this.setState({number: e.target.value})}/>
          </div>
            <Button onClick={() => this.props.action('newUser', {name: this.state.name, username: this.state.username, email: this.state.email, phone: this.state.number})}>Add user</Button>
        </div>
      </div>
    );

  	return (
      <div className={styles.NewUser__container} style={this.state.height === 50 ? {height: 50} : null}>
        { this.state.height === 50 ? btn_resizeDiv : form_resizeDiv }
      </div>
  	);
  };
}

export default connect(Home);