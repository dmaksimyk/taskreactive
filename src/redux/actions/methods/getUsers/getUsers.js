/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';
export default (type) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      let arrUser = json.map((user) => <Users key={user.id} uid={user.id} name={user.name} username={user.username} />);

      dispatch({
        type: type,
        payload: {
          users: json,
          usersAfter: arrUser,
        }
      })
    })
}