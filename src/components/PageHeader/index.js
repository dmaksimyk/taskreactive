import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import connect from '../../redux/connector';
import styles from './style.module.css';
import { CustomBtn } from '../';

class PageHeader extends Component {
  render() {
    return (
      <div className={styles.PageHeader}>
        <div className={styles.PageHeader_captionContainer}>
          {this.props.page !== "Home" ? <CustomBtn type="PAGE_HEADER" /> : <Redirect push to={`/`} />}
          <div className={styles.PageHeader_caption} style={this.props.page !== "Home" ? { marginLeft: 0 } : { marginLeft: 10 }}>
            <h3 className={styles.PageHeader_caption__h3}>{this.props.page}</h3>
            {this.props.visit ? <p className={styles.PageHeader_caption__p}>@{this.props.visit}</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(PageHeader);