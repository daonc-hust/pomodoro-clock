import { 
    INCREMENT_BREAK, INCREMENT_SESSION,
    DECREMENT_BREAK, DECREMENT_SESSION } from "./../constants/actionTypes";

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