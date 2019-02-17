import {FETCH_POSTS, NEW_POST} from '../actions/types';
const initialState = {
    posts: [1, 2]
};
export default function(state = initialState, action) {
    switch(action.type) {
        default: return state;
        case FETCH_POSTS:
            return {...state, posts: action.payload}; //override items var from initialState in reducer file
    }
};