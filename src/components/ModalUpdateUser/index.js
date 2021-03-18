import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core';
import { CloseOutlined } from '@material-ui/icons';
import connect from '../../redux/connector';
import styles from './style.module.css';

class UpdateUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			id: null,
			name: null,
			username: null,
			email: null,
			phone: null
		}
		this.sendUpdate = this.sendUpdate.bind(this);
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
			id: id,
			name: user.name,
			username: user.username,
			email: user.email,
			phone: user.phone
		})
	}

	sendUpdate() {
		this.props.action('updateUser', { id: this.state.id, name: this.state.name, username: this.state.username, email: this.state.email, phone: this.state.phone });
		this.props.action('visibleModal', {})
	}

	render() {
		return (
			<div className={styles.UpdateUser__container} style={{ display: this.props.visibleModal }}>
				<div className={styles.btn__hideModal} onClick={() => this.props.action('visibleModal')}>
					<CloseOutlined />
				</div>
				<div style={{ marginTop: 58 }}>
					<div className={styles.Modal__container}>
						<p>NAME:</p>
						<Input placeholder={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
					</div>
					<div className={styles.Modal__container}>
						<p>USERNAME:</p>
						<Input placeholder={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
					</div>
					<div className={styles.Modal__container}>
						<p>E-MAIL:</p>
						<Input placeholder={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
					</div>
					<div className={styles.Modal__container}>
						<p>PHONE NUMBER:</p>
						<Input placeholder={this.state.phone} onChange={(e) => this.setState({ phone: e.target.value })} />
					</div>
					<Button className={styles.btn__sendUpdate} onClick={this.sendUpdate}>SEND UPDATE</Button>
				</div>
			</div>
		);
	};
}

export default connect(UpdateUser);