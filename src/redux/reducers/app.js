/* eslint-disable no-unused-vars */
import update from 'immutability-helper';
import { SET_PAGE, UNVISIT, GET_USERS } from '../types.js';

import React from 'react';
import User from '../../components/users/index';

const initialState = {
    page: "Home",
    visit: null,
    users: [],
    usersAfter: [],
    posts: [],
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PAGE: return update(state, { page: { $set: payload.page }})
        case UNVISIT: return update(state, { visit: { $set: payload.visit }})
        case GET_USERS: return update(state, { users: { $set: payload.users }, usersAfter: { $set: payload.usersAfter }})
        default: return state; 
    }
}

export default reducer;