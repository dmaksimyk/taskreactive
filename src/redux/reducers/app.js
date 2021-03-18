/* eslint-disable no-unused-vars */
import update from 'immutability-helper';
import React from 'react';

import {
  SET_PAGE,
  GET_USERS,
  GET_USER_POSTS,
  VISIBLE_MODAL
} from '../types.js';

import {
  Users,
  Posts
} from '../../components';

const initialState = {
  page: "Home",
  visit: null,
  users: [],
  usersAfter: [],
  posts: [],
  visibleModal: "none"
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGE: return update(state, { page: { $set: payload.page }, visit: { $set: payload.visit } })
    case GET_USERS: return update(state, { users: { $set: payload.users }, usersAfter: { $set: payload.usersAfter } })
    case GET_USER_POSTS: return update(state, { posts: { $set: payload.posts } })
    case VISIBLE_MODAL: return update(state, { visibleModal: { $set: payload.visibleModal } })
    default: return state;
  }
}

export default reducer;