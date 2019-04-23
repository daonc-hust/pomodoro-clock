import { 
    INCREMENT_BREAK, INCREMENT_SESSION, SET_TIME_LEFT_IN_SECOND,
    DECREMENT_BREAK, DECREMENT_SESSION, DECREASE_TIMER, SET_BREAK_LENGTH } from "./../constants/actionTypes";

export const incrementBreak = () => {
    return {    
        type: INCREMENT_BREAK
    }
}

export const decrementBreak = () => {
    return {    
        type: DECREMENT_BREAK,
    }
}

export const incrementSession = () => {
    return {    
        type: INCREMENT_SESSION
    }
}

export const decrementSession = () => {
    return {    
        type: DECREMENT_SESSION
    }
}

export const decreaseTimer = () => {
    return {
        type: DECREASE_TIMER
    }
}

export const setTimeLeftInSecond = (time) => {
    return {
        type: SET_TIME_LEFT_IN_SECOND,
        time
    }
}

export const setBreakLengthDefault = (time) => {
    return {
        type: SET_BREAK_LENGTH,
        time
    }
}