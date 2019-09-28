import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from './types';

export function increment() {
    const action = {
        type: INCREMENT_COUNTER
    }
    return action;
}

export function decrement() {

    const action = {
        type: DECREMENT_COUNTER
    }

    return action;
}

export function reset() {
    return {
        type: RESET_COUNTER
    }
}