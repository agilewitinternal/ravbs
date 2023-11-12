import { NEW } from "../actionTypes"

export const setNewUser = (value: string) => {
    return {
        type: NEW,
        payload: value
    }
}