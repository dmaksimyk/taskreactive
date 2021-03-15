import React, { Component } from 'react';
import connect from '../../redux/connector';
import styles from './style.module.css';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 50
    }
  }

  render() {
    const resizeDiv = (
      <div className={styles.btn__AddUser} onClick={() => this.setState({ height: 200 })}>
        <p>ADD USER</p>
      </div>
    );

  	return (
      <div className={styles.NewUser__container} style={this.state.height !== 1 ? {height: this.state.height} : null}>
        { this.state.height === 50 ? resizeDiv : null }
      </div>
  	);
  };
}

export default connect(Home);