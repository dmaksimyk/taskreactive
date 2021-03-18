/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';

export default (type, options) => (dispatch, get) => {
  let user = {
    "name": options.name ? options.name : "no name",
    "username": options.username ? options.username : "no_username",
    "email": options.email ? options.email : "no email",
    "phone": options.phone ? options.phone : "no phone"
  };

  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      let newArr = get().app.users;
      let checkUser = newArr.find((user) => user.id === json.id);

      if (!checkUser) {
        newArr.push(json)
      } else {
        return console.log('User has been register', json.id)
      }

      let newUserArr = newArr.map((user, index) => {
        return <Users key={index} uid={user.id} name={user.name} username={user.username} />
      });

      dispatch({
        type: type,
        payload: {
          users: newArr,
          usersAfter: newUserArr,
        }
      })
    });
}