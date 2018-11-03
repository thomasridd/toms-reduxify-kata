import { CHANGE } from './actions'

export default function(state = "", action) {
    switch(action.type) {
        case CHANGE:
            return action.payload
        default:
            return state
    }
}