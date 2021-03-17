import React, { Component } from 'react';
import styles from './style.module.css';
import { ArrowRightOutlined } from '@material-ui/icons'
import { Redirect } from 'react-router-dom';
import connect from '../../redux/connector';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.redirect = this.redirect.bind(this);
    }

    redirect(){
        this.props.action('setPage', {page: 'Profile', visit: this.props.username})
        this.setState({ redirect: true })
    }

  	render() {
        if (this.state.redirect) return <Redirect push to={`/profile?id=${this.props.uid}`} />;
    	return (
        <div className={styles.User__container} onClick={this.redirect} >
            <div className={styles.Icon__user_container}>
                <ArrowRightOutlined />
            </div>
            <div className={styles.User__info}>
                <p>@{ this.props.username },</p>
                <p>id: { this.props.uid }</p>
            </div>
            <p style={{ margin: 0, marginTop: 8 }}>Name: { this.props.name }</p>
        </div>
		);
    };
}

export default connect(Users);