import { createStore } from 'redux';
import {
    initialState,
} from "../utils/config";

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_CANDIDATE': {
            return {
                candidates: [...state.candidates,action.data],
            }
        }
        case 'UPDATE_STATUS': {
            const newCandidates = [...state.candidates];
            const index = newCandidates.findIndex(c => {
                return c.email === action.data.email
            })
            newCandidates[index] = action.data
            return {
                candidates: newCandidates,
            }
        }
        default:
            return state
    }
}

let store = createStore(reducer);

export default store;
