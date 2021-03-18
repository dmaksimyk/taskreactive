/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';
export default (type, options) => (dispatch, get) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      let arrUser = json.map((user, index) => {
        return <Users key={index} uid={user.id} name={user.name} username={user.username} />
      });

      dispatch({
        type: type,
        payload: {
          users: json,
          usersAfter: arrUser,
        }
      })
    })
}