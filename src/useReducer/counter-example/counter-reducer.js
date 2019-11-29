export const initialState = 0;
export const reducer = (state, action) => {
    switch (action.type) {
        case 'INR':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return initialState;
        default: return state
    }
}
