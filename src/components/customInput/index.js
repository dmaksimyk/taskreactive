import React, { Component } from 'react';
import { Input } from '@material-ui/core';
import styles from './style.module.css';

export default class CustomInput extends Component {
  render() {
    return (
      <div className={styles.Modal__container}>
        <p className={styles.title}>{this.props.type}:</p>
        <Input className={styles.Input} onChange={(e) => this.props.changeInput({ type: this.props.type, value: e.target.value })} />
      </div>
    );
  };
}