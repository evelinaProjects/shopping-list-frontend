export const HttpReducer = (state, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return {...state, loading: true}       
        case 'ERROR':
            return {loading: false, errorMsg: action.msg}
        case 'END_LOADING':
            return {...state, loading: false}       
        case 'CLEAN_ERROR':
            return {...state, errorMsg: null}       
        default:
            return state;
    }
}

