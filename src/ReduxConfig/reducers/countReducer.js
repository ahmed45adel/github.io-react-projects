import {
    initialState,
    INCREASE_COUNT,
    DECREASE_COUNT
} from "../constants/constants"


// Reducers
export const countReducer = (state = initialState, action) => {

    switch (action.type) {
        case INCREASE_COUNT:
            return {
                ...state,
                count: state.count + action.payload
            };
        case DECREASE_COUNT:
            return {
                ...state,
                count: state.count - action.payload
            };
        default:
            return state
    }
}