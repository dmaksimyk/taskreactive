import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import styles from './style.module.css';
import { CloseOutlined, EditOutlined, ArrowBackOutlined } from '@material-ui/icons';
import connect from '../../redux/connector';

class customBtn extends Component {
  render() {
    switch (this.props.type) {
      case "NEWUSER_OPEN":
        return (
          <Button className={styles.btn__customBtn} onClick={() => this.props.changeHeight(this.props.height === 200 ? 75 : 200)}>
            <p>{this.props.title}</p>
          </Button>
        );
      case "MODAL_CLOSE":
        return (
          <Button className={styles.btn__customBtn} color="secondary" onClick={() => this.props.action('visibleModal')}>
            <CloseOutlined />
          </Button>
        );
      case "VISIBLE_MODAL":
        return (
          <button onClick={() => this.props.action('visibleModal')} className={styles.UserData__btnEdit}>
            <EditOutlined className={styles.UserData__btnEditSvg} />
          </button>
        );
      case "PAGE_HEADER":
        return (
          <button className={styles.PageHeader_btnBack} onClick={() => this.props.action('setPage', { page: 'Home' })}>
            <ArrowBackOutlined />
          </button>
        );
      default: return
    };
  }
}

export default connect(customBtn);