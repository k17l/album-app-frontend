const initState = {
    albumDetails : []
}

const albumDetailsReducer  = (state = initState,action) => {
    if(action.type === 'LOAD_ALBUM_DETAILS') {
        return {
            ...state,
            albumDetails : action.albumDetails
        }
    }
    return state
}

export default albumDetailsReducer