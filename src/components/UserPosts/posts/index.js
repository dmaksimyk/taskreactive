import React, { Component } from 'react';
import styles from './style.module.css';

class Post extends Component {
  	render() {
    	return (
        <div className={styles.UserPosts__container}>
            <p className={styles.UserPosts__header}>{this.props.title.toUpperCase()}</p>
            <div>
                <p className={styles.UserPosts__body}>{this.props.body}</p>
            </div>
        </div>
		);
    };
}

export default Post;