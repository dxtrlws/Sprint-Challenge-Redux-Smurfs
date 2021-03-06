/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const GET_SMURFS = 'GET_SMURFS';
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const ERROR_SMURFS = 'ERROR_SMURFS';
export const ADD_SMURF = 'ADD_SMURF';
export const ADDING_SMURF = 'ADDING_SMURF';

export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
      dispatch({ type: GET_SMURFS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR_SMURFS, payload: err });
    });
};

export const addSmurf = smurf => (dispatch) => {
  dispatch({ type: ADDING_SMURF });
  return axios
    .post('http://localhost:3333/smurfs', smurf)
    .then((res) => {
      dispatch({ type: ADD_SMURF, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ERROR_SMURFS, payload: err });
    });
};
