import React, { Component } from 'react';
import { EditOutlined } from '@material-ui/icons';
import connect from '../../redux/connector';
import styles from './style.module.css';

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null
    }
    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    const getUrlKeys = () => {
      let keys = {}
      window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => keys[key] = value);
      return keys;
    }

    let id = Number(getUrlKeys()["id"]),
      user = this.props.users.find((user) => user.id === id);

    if (!id) return this.props.action('setPage', { page: 'Home' })

    this.setState({
      name: user.name,
      email: user.email,
      phone: user.phone
    })
  }

  openModal() {
    this.props.action('visibleModal', {})
  }

  render() {
    return (
      <div className={styles.UserData__container}>
        <div className={styles.UserData_block__header}>
          <div>
            <p className={styles.UserData__header}>INFORMATION</p>
          </div>
          <div onClick={this.openModal} className={styles.UserData__btnEdit}>
            <EditOutlined />
          </div>
        </div>
        <div className={styles.Information__container}>
          <div>
            <p>name:</p>
            {this.state.name}
          </div>
          <div>
            <p>email:</p>
            {this.state.email}
          </div>
          <div>
            <p>phone:</p>
            {this.state.phone}
          </div>
        </div>
      </div>
    );
  };
}

export default connect(UserData);