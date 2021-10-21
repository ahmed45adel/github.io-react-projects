import {
    ADD_TODO,
    initialToDo
} from "../constants/constants"


// Reducers
export const todoReducer = (state = initialToDo, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        // case DECREASE_COUNT:
        //     return {
        //         ...state,
        //         count: state.count - action.payload
        //     };
        default:
            return state
    }
}