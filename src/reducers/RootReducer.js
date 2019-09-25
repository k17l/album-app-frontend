import { combineReducers } from 'redux';
import userDetailsReducer from './UserDetailsReducer'
import albumDetailsReducer from './AlbumDetailsReducer'
import photoDetailsReducer from './PhotoDetailsReducer'

const rootReducer = combineReducers({
    userDetailsReducer : userDetailsReducer,
    albumDetailsReducer : albumDetailsReducer,
    photoDetailsReducer : photoDetailsReducer
});

export default rootReducer;