import {
    ADD_TODO,
    initialToDo,
    REMOVE_TODO
} from "../constants/constants"


// Reducers
export const todoReducer = (state = initialToDo, action) => {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case REMOVE_TODO:

            return {
                ...state,
                todos: state.todos.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}