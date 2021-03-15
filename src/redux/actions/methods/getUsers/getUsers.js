/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import User from '../../../../components/users/index';
export default (type, options) => (dispatch, get) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            let arrUser = json.map((user) => {
                return <User key={user.id} id={user.id} name={user.name} username={user.username} />
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