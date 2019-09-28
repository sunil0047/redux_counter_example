import { createStore } from 'redux';
import reducer from './reducers/reducer'

const initialState = {
    count: 2
};

const store = createStore(reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );


export default store;