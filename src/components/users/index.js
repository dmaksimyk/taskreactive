import React, { Component } from 'react';
import styles from './style.module.css';
import { ArrowRightOutlined } from '@material-ui/icons'

export default class App extends Component {
  	render() {
    	return (
        <div className={styles.User__container}>
            <div className={styles.Icon__user_container}>
                <ArrowRightOutlined />
            </div>
            <div className={styles.User__info}>
                <p>@{ this.props.username },</p>
                <p>id: { this.props.id }</p>
            </div>
            <p style={{ margin: 0, marginTop: 8 }}>Name: { this.props.name }</p>
        </div>
		);
    };
}