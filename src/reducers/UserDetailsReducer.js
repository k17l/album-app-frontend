const initState = {
    userDetails : []
}

const userDetailsReducer  = (state = initState,action) => {
    if(action.type === 'LOAD_USER_DETAILS') {
        return {
            ...state,
            userDetails : action.userDetails
        }
    }
    return state
}

export default userDetailsReducer