import React, { Component } from 'react';
import { CustomBtn, Container } from '../';
import connect from '../../redux/connector';
import styles from './style.module.css';

class ModalUpdateUser extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.which === 27) {
        this.props.action('hideModal', {})
      }
    });
  }

  render() {
    return (
      <div
        className={styles.UpdateUser__container}
        style={{ display: this.props.visibleModal }}
      >
        <CustomBtn type="MODAL_CLOSE" />
        <Container type="MODAL" />
      </div>
    );
  };
}

export default connect(ModalUpdateUser);