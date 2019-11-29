import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART, SUCCESS_CALLBACK, ERROR_CALLBACK } from "./action-types";

export const initialState = [];

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case DELETE_FROM_CART:
            return state.filter(item => item.id != action.id);
        case CLEAR_CART:
            return initialState;
        // case SUCCESS_CALLBACK:
        //     return action.payload

        // case ERROR_CALLBACK:
        //     return [...state, {
        //         loading: false,
        //         error: 'Something went wrong :(',
        //         response: []
        //     }]
        default: return state;
    }
}
