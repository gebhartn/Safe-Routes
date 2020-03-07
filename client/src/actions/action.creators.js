import axios from 'axios';
import handleError from '../errors';
import { FETCH_PENDING, FETCH_FAILURE, FETCH_SUCCESS } from './action.types';

export const fetchData = () => async dispatch => {
  dispatch({ type: FETCH_PENDING });

  try {
    const { data: payload } = await axios.get('http://localhost:4000/');
    dispatch({ type: FETCH_SUCCESS, payload });
  } catch ({ request: { status } }) {
    const payload = handleError(status);
    dispatch({ type: FETCH_FAILURE, payload });
  }
};

export const annoy = 'hello';
