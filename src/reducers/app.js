import { INCREMENT_BREAK, INCREMENT_SESSION, DECREMENT_BREAK, DECREMENT_SESSION } from'./../constants/actionTypes'

let initialState = {
    breakLength: 5,
    sessionLength: 25
}

const app = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_BREAK:
            return {
                ...state,
                breakLength: state.breakLength + 1
            }
            break;
        case DECREMENT_BREAK:
            return {
                ...state,
                breakLength: state.breakLength - 1
            }
            break;
        case INCREMENT_SESSION:
            return {
                ...state,
                sessionLength: state.sessionLength + 1
            }
            break;
        case DECREMENT_SESSION:
            return {
                ...state,
                sessionLength: state.sessionLength - 1
            }
            break;
        default:
            return state
    }
}

export default app