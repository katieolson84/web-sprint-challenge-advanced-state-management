import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAIL = "FETCHING_SMURF_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const NEW_ERROR_MESSAGE = "NEW_ERROR_MESSAGE";

export const getSmurf = () => {
    return(dispatch => {
        dispatch({type:FETCHING_SMURF_START});
        axios
            .get(`http://localhost:3333/smurfs`)
            .then(res => {
                dispatch({type: FETCHING_SMURF_SUCCESS, payload:res.data});
                // console.log (res.data)
            })
            .catch(err => {
                dispatch({type: FETCHING_SMURF_FAIL, payload: err.Response.message});
            })
    })
}

export const addSmurf = (newSmurf) => {
    return (dispatch => {
        dispatch({type:ADD_SMURF});
        axios
            .post(`http://localhost:3333/smurfs`, newSmurf)
            .then(res=> {
                dispatch({type:FETCHING_SMURF_SUCCESS, payload:res.data});
            })
            .catch(err => {
                dispatch({type:FETCHING_SMURF_FAIL, payload: err.response.message});
            });
    });
}

export const newErrorMessage = () => {
    return (dispatch => {
        dispatch({type:NEW_ERROR_MESSAGE});
    })
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.