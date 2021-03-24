/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';
import { fetchData } from '../';

export default (type, options) => (dispatch, get) => {
  let user = {
    "name": options.name || "no name",
    "username": options.username || "no_username",
    "email": options.email || "no email",
    "phone": options.phone || "no phone"
  };

  let arrUsers = get().app.users;

  fetchData("POST", "users", user)
    .then((obj) => {
      if (obj.error) return console.log(obj.error)
      
      let checkUser = arrUsers.find((user) => user.id === obj.request.id);

      if (checkUser) return console.log('User has been register', obj.request.id)
      arrUsers.push(obj.request)

      let newUserArr = arrUsers.map((user) => <Users key={user.id} uid={user.id} name={user.name} username={user.username} />);

      dispatch({
        type: type,
        payload: {
          users: arrUsers,
          usersAfter: newUserArr,
        }
      })
    });
}