/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Posts } from '../../../../components';
import { fetchData } from '../';

export default (type, options) => (dispatch) => {
  fetchData("GET", "posts").then((obj) => {
    let filterArr = obj.request.filter((user) => user.userId === options.id),
      posts = filterArr.map((post) => <Posts key={post.id} title={post.title} body={post.body} />)

    dispatch({
      type: type,
      payload: {
        posts: posts
      }
    })
  });
}