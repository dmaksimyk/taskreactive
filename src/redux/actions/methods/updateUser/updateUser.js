/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Users } from '../../../../components';

export default (type, options) => (dispatch, get) => {
    let user = {
        "id": options.id,
        "name": options.name ? options.name : "no_name",
        "username": options.username ? options.username : "@no_username",
        "email": options.email ? options.email : "no_email",
        "phone": options.phone ? options.phone : "no_phone",
      };

    if(options.id === 11){
        let usersArr = get().app.users;
            let checkUser = usersArr.findIndex((user) => user.id === options.id);
            usersArr[checkUser] = user;
             
            let newUserArr = usersArr.map((user, index) => {
              return <Users key={index} uid={user.id} name={user.name} username={user.username} />
            });

            return dispatch({
                type: "GET_USERS",
                payload: {
                    users: usersArr,
                    usersAfter: newUserArr,
                }
            })
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${options.id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            let usersArr = get().app.users;
            let checkUser = usersArr.findIndex((user) => user.id === json.id);
            usersArr[checkUser] = json;
             
            let newUserArr = usersArr.map((user, index) => {
              return <Users key={index} uid={user.id} name={user.name} username={user.username} />
            });

            dispatch({
                type: "GET_USERS",
                payload: {
                    users: usersArr,
                    usersAfter: newUserArr,
                }
            })
        });
}