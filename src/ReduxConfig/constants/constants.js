// constants
export const INCREASE_COUNT = "INCREASE_COUNT";
export const DECREASE_COUNT = "DECREASE_COUNT";
export const ADD_TODO = "ADD_TODO";

// States
export const initialState = {
    count: 0
}

export const initialToDo = {
    todos: [{
        title: 'learn Redux',
        content: 'learn Redux'
    }]
}