import React, { Component } from 'react';
import connect from '../../redux/connector';
import styles from './style.module.css';

import {CustomBtn, Container} from '../../components'

class NewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 75
    }
    this.changeHeight = this.changeHeight.bind(this);
  }
  
  changeHeight(e){
    this.setState({height: e})
  }

  render() {
    return (
      <div className={styles.NewUser__container} style={this.state.height === 75 ? { height: 75 } : null}>
        <CustomBtn 
          type="NEWUSER_OPEN"
          changeHeight={this.changeHeight}  
          height={this.state.height} 
          title={this.props.height === 200 ? `HIDE FORM` : `ADD USER`}
        />
        <Container type="NEWUSER"/>
      </div>
    );
  };
}

export default connect(NewUser);