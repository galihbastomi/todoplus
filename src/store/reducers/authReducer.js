const initState = {
    authError: null
}

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return{
                ...state,
                authError: 'Login Error'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return{
                ...state,
                authError: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('Logout Success');
            return state
        case 'SIGNUP_SUCCESS':
            console.log('Signup Success');
            return{ 
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('Signup Error');
            return{
                ...state,
                authError: action.err.message
            }
        default: 
                return state
    }
}

export default authReducer