/* eslint-disable import/no-anonymous-default-export */
import { connect } from 'react-redux';
import action from './actions/app';

const mapState = (state) => ({ ...state.app });
const mapDispatch = (dispatch) => ({ action: (method, option) => dispatch(action(method, option)) });

export default (component) => connect(mapState, mapDispatch)(component);