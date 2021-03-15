import React, { Component } from 'react';
import styles from './style.module.css';
import { ArrowBackOutlined } from '@material-ui/icons';
import connect from '../../redux/connector';

class PageHeader extends Component {
  render(){
    const backBtn = ( 
                      <div className={styles.PageHeader_btnBack} onClick={() => this.props.action('setPage', { page: "Home" })}>
                        <ArrowBackOutlined/>
                      </div>
                    )
      return(
        <div className={styles.PageHeader}>
          <div className={styles.PageHeader_captionContainer}>
            {this.props.page !== "Home" ? backBtn : null}
              <div className={styles.PageHeader_caption} style={this.props.page !== "Home" ? {marginLeft: 0} : {marginLeft: 10}}>
                <h3>{this.props.page}</h3>
                {this.props.visit ? <p>{this.props.visit}</p> : null}
              </div>
          </div>
        </div>
      )
  }
}

export default connect(PageHeader);