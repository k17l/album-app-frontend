const initState = {
    photoDetails : []
}

const photoDetailsReducer  = (state = initState,action) => {
    if(action.type === 'LOAD_PHOTO_DETAILS') {
        return {
            ...state,
            photoDetails : action.photoDetails
        }
    }
    return state
}

export default photoDetailsReducer