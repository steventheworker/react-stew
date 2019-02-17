import {FETCH_POSTS, NEW_POST} from '../actions/types';
export const fetchPosts = () => dispatch => {
    return function(dispatch) {
        let data; //the posts
        dispatch({
            type: FETCH_POSTS,
            payload: data
        });
    }
}