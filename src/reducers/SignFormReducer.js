export const SignFormReducer = (state, action) => {
    switch (action.type) {
        case 'IMAGE':
            return {...state, image: action.image }       
        case 'NAME':
            return {...state, name: action.name}    
        case 'EMAIL':
            return {...state, email: action.email }       
        case 'PASSWORD':
            return {...state, password: action.password}        
        default:
            return state;
    }
}