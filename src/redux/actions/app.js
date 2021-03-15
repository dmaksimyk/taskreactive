/* eslint-disable import/no-anonymous-default-export */
import { setPage, getUsers } from './index.js';
import { SET_PAGE, GET_USERS } from '../types.js';

// get().app - параметры из storage
// dispatch() - всегда передаётся
// у dispatch должно быть 2 параметра

export default (action, options) => (dispatch, get) => {
    switch (action) {
        case "setPage": setPage(SET_PAGE, options)(dispatch, get); break;
        case "getUsers": getUsers(GET_USERS, options)(dispatch, get); break;
        default: console.log(`Controller ${action} was not found!`);
    }
}