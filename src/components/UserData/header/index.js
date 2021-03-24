import React, { Component } from 'react';
import styles from './style.module.css';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.block__Header}>
        <p className={styles.UserData__header}>INFORMATION</p>
      </div>
    );
  };
}