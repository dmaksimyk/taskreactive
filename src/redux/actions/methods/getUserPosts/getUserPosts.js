/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Posts } from '../../../../components';

export default (type, options) => (dispatch, get) => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
      let filterArr = json.filter((user) => user.userId === options.id);
      let posts = filterArr.map((post, index) => <Posts key={index} title={post.title} body={post.body} />)
      dispatch({
        type: type,
        payload: {
          posts: posts
        }
      })
    });
}