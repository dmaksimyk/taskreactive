import React, { Component } from 'react';
import connect from '../../redux/connector';
import styles from './style.module.css';
import { withRouter } from 'react-router-dom';

import {
  UserData,
  UserPosts,
  UpdateUser
} from '../../components'

class Profile extends Component {
  render() {
    return (
      <div className={styles.Profile__container}>
        <UpdateUser />
        <div className={styles.UpdateUser__bg} style={{ display: this.props.visibleModal }} onClick={() => this.props.action('visibleModal')}></div>
        <UserData />
        <UserPosts />
      </div>
    );
  };
}

export default withRouter(connect(Profile));