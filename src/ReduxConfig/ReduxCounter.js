// import {
//     createStore
// } from "redux"




// // increase action
// export const Increase = (payload) => {
//     return {
//         type: INCREASE_COUNT,
//         payload
//     }
// // }
// // decrease action
// export const Decrease = (payload) => {
//     return {
//         type: DECREASE_COUNT,
//         payload
//     }
// }
// // States
// const initialState = {
//     count: 0
// }

// // Reducers
// const countReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case INCREASE_COUNT:
//             return {
//                 ...state,
//                 count: state.count + action.payload
//             }
//             case DECREASE_COUNT:
//                 return {
//                     ...state,
//                     count: state.count - action.payload
//                 }
//                 default:
//                     return state
//     }
// }

// // Store
// export const store = createStore(countReducer);