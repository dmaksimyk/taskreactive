import React, { Component } from 'react';
import connect from '../../redux/connector';
import styles from './style.module.css';
import getUrl from '../modules/getUrlKey';
import { CustomBtn } from '../';
import Container from './container';
import Header from './header';

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null
    }
  }

  componentDidMount() {
    let user = getUrl(this.props.users);
    if (!user) return this.props.action('setPage', { page: 'Home' })
    this.setState({
      name: user.name,
      email: user.email,
      phone: user.phone
    })
  }

  render() {
    return (
      <div className={styles.UserData__container}>
        <div className={styles.UserData_block__header}>
          <Header />
          <CustomBtn type="VISIBLE_MODAL" />
        </div>
        <div className={styles.Information__container}>
          <Container caption="name" value={this.state.name} />
          <Container caption="email" value={this.state.email} />
          <Container caption="phone" value={this.state.phone} />
        </div>
      </div>
    );
  };
}

export default connect(UserData);