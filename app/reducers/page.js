import {
    ACTION_CREATORS,
} from '../constants';

function pageReducer(state={ items: {} }, action) {
    const { API_LOADING } = ACTION_CREATORS;
    switch(action.type) {
        case API_LOADING:
            return {
                ...state, 
                loadin: true 
            }
        default:
            return {
                ...state,
                loading: false
            };
    }

}



export default pageReducer;
