import React, { Component } from 'react';
import connect from '../../redux/connector';
import styles from './style.module.css';

class Home extends Component {
  componentDidMount(){
    this.props.action('getUsers', {})
  }
  
  render() {
  	return (
      <div className={styles.Home__container}>
        <div>
          {this.props.usersAfter}
        </div>
      </div>
  	);
  };
}

export default connect(Home);