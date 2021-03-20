/* eslint-disable import/no-anonymous-default-export */
import { setPage, getUsers, newUser, getUserPosts, updateUser, visibleModal } from './methods'
import { SET_PAGE, GET_USERS, NEW_USER, GET_USER_POSTS, UPDATE_USER, VISIBLE_MODAL } from '../types.js';

export default (action, options) => (dispatch, get) => {
  switch (action) {
    case "setPage": setPage(SET_PAGE, options)(dispatch); break;
    case "getUsers": getUsers(GET_USERS)(dispatch); break;
    case "newUser": newUser(NEW_USER, options)(dispatch, get); break;
    case "getUserPosts": getUserPosts(GET_USER_POSTS, options)(dispatch); break;
    case "updateUser": updateUser(UPDATE_USER, options)(dispatch, get); break;
    case "visibleModal": visibleModal(VISIBLE_MODAL)(dispatch, get); break;
    default: console.log(`Controller ${action} was not found!`);
  }
}