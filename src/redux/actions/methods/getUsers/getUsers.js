/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';
import { fetchData } from '../';

export default (type) => (dispatch) => {
  fetchData("GET", "users").then((obj) => {
    if (obj.error) return console.log(obj.error)
    let arrUser = obj.request.map((user) => <Users key={user.id} uid={user.id} name={user.name} username={user.username} />);
    dispatch({
      type: type,
      payload: {
        users: obj.request,
        usersAfter: arrUser,
      }
    })
  })
}