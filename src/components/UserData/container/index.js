import React, { Component } from 'react';
import styles from './style.module.css';

export default class Container extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p className={styles.p}>{this.props.caption}:</p>
        <p className={styles.title}>{this.props.value}</p>
      </div>
    );
  };
}