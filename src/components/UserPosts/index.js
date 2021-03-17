import React, { Component } from 'react';
import styles from './style.module.css';
import connect from '../../redux/connector';

class UsersData extends Component {
    componentDidMount() {
        const getUrlKeys = () => {
            let keys = {}
            window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => keys[key] = value);
            return keys;
        }
        
        let id = Number(getUrlKeys()["id"]);
        if(!id) return this.props.action('setPage', {page: 'Home'})
        this.props.action('getUserPosts', {id: id});
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

export default connect(UsersData);