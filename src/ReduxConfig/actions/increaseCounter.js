import {
    INCREASE_COUNT
} from "../constants/constants"
// increase action
export const Increase = (payload) => {
    return {
        type: INCREASE_COUNT,
        payload
    }
}