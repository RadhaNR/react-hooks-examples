import { SUCCESS_CALLBACK, ERROR_CALLBACK } from "./action-types";

export const initialState = {};

export const apiReducer = (state, action) => {
    switch (action.type) {
        case SUCCESS_CALLBACK:
            return {
                loading: false,
                error: '',
                response: action.payload
            }
        case ERROR_CALLBACK:
            return {
                loading: false,
                error: 'Something went wrong :(',
                response: []
            }
        default: return state;
    }
}
