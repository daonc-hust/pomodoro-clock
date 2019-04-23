import { INCREMENT_BREAK, INCREMENT_SESSION, DECREMENT_BREAK, DECREMENT_SESSION, DECREASE_TIMER, SET_TIME_LEFT_IN_SECOND, SET_BREAK_LENGTH } from'./../constants/actionTypes'
import config from './../constants/config'

let initialState = {
    breakLength: config.initialBreakLength,
    sessionLength: config.initialSessionLength,
    timeLeftInSecond: config.initialTimeLeftInSecond
}

const app = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT_BREAK:
            return {
                ...state,
                breakLength: state.breakLength + 1
            }
        case DECREMENT_BREAK:
            return {
                ...state,
                breakLength: state.breakLength - 1
            }
        case INCREMENT_SESSION:
            return {
                ...state,
                sessionLength: state.sessionLength + 1,
                timeLeftInSecond: state.timeLeftInSecond + 60
            }
        case DECREMENT_SESSION:
            return {
                ...state,
                sessionLength: state.sessionLength - 1,
                timeLeftInSecond: state.timeLeftInSecond - 60
            }
        case DECREASE_TIMER:
            return {
                ...state,
                timeLeftInSecond: state.timeLeftInSecond - 1
            }
        case SET_TIME_LEFT_IN_SECOND:
            return {
                ...state,
                timeLeftInSecond: action.time,
                sessionLength: action.time / 60
            }
        case SET_BREAK_LENGTH:
            return {
                ...state,
                breakLength: action.time
            }
        default:
            return state
    }
}

export default app