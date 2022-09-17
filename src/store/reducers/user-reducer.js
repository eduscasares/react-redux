import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/async.actions";

// Initial State for userState
const initialState = {
    fetching: false,
    token: null,
    error: null,
    logged: false
}

export const userReducer = (state=initialState, action) => {

    switch (action.type) {
        case API_CALL_REQUEST:
            return{
                ...state,
                fetching: true,
                error: null,
                logged: false,
            }

        case API_CALL_SUCCESS:
            return{
                ...state,
                fetching: false,
                logged: true,
                error: null,
                token: action.payload.token
            }

        case API_CALL_FAILURE:
            return {
                ...state, 
                fetching: false,
                logged: false,
                error: action.payload.error,
                token: null,
            }
    
        default:
            return state;
    }

}