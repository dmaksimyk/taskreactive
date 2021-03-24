/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';
import { fetchData } from '../';

export default (type, options) => (dispatch, get) => {
  let user = {
    "id": options.id,
    "name": options.name || "no_name",
    "username": options.username || "no_username",
    "email": options.email || "no_email",
    "phone": options.phone || "no_phone",
  };

  let arrUsers = get().app.users;

  if (options.id === 11) {
    let checkUser = arrUsers.findIndex((user) => user.id === options.id);
    arrUsers[checkUser] = user;
    let newUserArr = arrUsers.map((user) => <Users key={user.id} uid={user.id} name={user.name} username={user.username} />);

    return dispatch({
      type: "GET_USERS",
      payload: {
        users: arrUsers,
        usersAfter: newUserArr,
      }
    })
  }

  fetchData("PUT", "users", user)
    .then((obj) => {
      let checkUser = arrUsers.findIndex((user) => user.id === obj.request.id);
      arrUsers[checkUser] = obj.request;

      let newUserArr = arrUsers.map((user) => <Users key={user.id} uid={user.id} name={user.name} username={user.username} />);

      dispatch({
        type: "GET_USERS",
        payload: {
          users: arrUsers,
          usersAfter: newUserArr,
        }
      })
    });
}