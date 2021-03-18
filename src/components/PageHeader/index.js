import React, { Component } from 'react';
import { ArrowBackOutlined } from '@material-ui/icons';
import { Redirect } from 'react-router-dom';
import connect from '../../redux/connector';
import styles from './style.module.css';

class PageHeader extends Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.props.action('setPage', { page: 'Home' })
  }

  render() {
    const backBtn = (
      <div className={styles.PageHeader_btnBack} onClick={this.redirect}>
        <ArrowBackOutlined />
      </div>
    )
    return (
      <div className={styles.PageHeader}>
        <div className={styles.PageHeader_captionContainer}>
          {this.props.page !== "Home" ? backBtn : <Redirect push to={`/`} />}
          <div className={styles.PageHeader_caption} style={this.props.page !== "Home" ? { marginLeft: 0 } : { marginLeft: 10 }}>
            <h3>{this.props.page}</h3>
            {this.props.visit ? <p>@{this.props.visit}</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(PageHeader);