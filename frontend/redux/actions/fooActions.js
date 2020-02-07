
import axios from 'axios';

// fooActions.js
import { FOO } from '../actionTypes';

export const getPosts = () => dispatch =>
  axios({
    method: 'GET',
    url: `https://jsonplaceholder.typicode.com/posts`,
    headers: []
  }).then(response => {
    console.log('inside getPosts response in actions and value: ', response)
    dispatch({ type: FOO, payload: response.data })
  });
