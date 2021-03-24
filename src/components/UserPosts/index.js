import React, { Component } from 'react';
import connect from '../../redux/connector';
import styles from './style.module.css';
import getUrl from '../modules/getUrlKey';

class UserData extends Component {
  componentDidMount() {
    let id = getUrl(this.props.users).id;
    if (!id) return this.props.action('setPage', { page: 'Home' })
    this.props.action('getUserPosts', { id: id });
  }

  render() {
    return (
      <div className={styles.UserPosts__container}>
        <p className={styles.UserPosts__header}>POSTS</p>
        {this.props.posts.length === 0 ? <p className={styles.no_posts}>NO POSTS</p> : this.props.posts}
      </div>
    );
  };
}

export default connect(UserData);