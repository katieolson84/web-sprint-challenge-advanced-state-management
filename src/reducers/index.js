
import {FETCHING_SMURF_START, FETCHING_SMURF_SUCCESS, FETCHING_SMURF_FAIL, ADD_SMURF, NEW_ERROR_MESSAGE} from './../actions'
import uuid from 'react-uuid'

export const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
    // id: uuid()
}

export const reducer = (state= initialState, action)=>{
    switch(action.type){
        case(FETCHING_SMURF_START):
            return({
                ...state,
                isFetching: true,
                errors: ''
            });
        case(FETCHING_SMURF_SUCCESS):
            return({
                ...state,
                smurfs: action.payload,
                isFetching: false
            });
        case(FETCHING_SMURF_FAIL):
            return({
                ...state,
                error: "Something is broken..." + action.payload
            })
        case(ADD_SMURF):
            return ({
            ...state,
            smurfs: [state.smurfs, action.payload],
            isFetching: false
            })
        case(NEW_ERROR_MESSAGE):
            return ({
                ...state,
                isFetching: true,
                error: "Oops, it looks like you are missing some info!"

            })
        default:
            return state;
    }
}


//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.