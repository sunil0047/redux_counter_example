import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from '../actions/types';

const initialState = {
    count: 23
}

export default function reducer (state = initialState, action) {

    switch(action.type) {
        case INCREMENT_COUNTER:
            return {
                count : state.count+1
            }
        
        case DECREMENT_COUNTER:
            return {
                count: state.count-1
            }
        
        case RESET_COUNTER:
            return {
                count: state.count=0
            }
        default:
            return state;
    }
}