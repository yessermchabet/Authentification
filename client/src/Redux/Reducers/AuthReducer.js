import { REGISTER } from "../ActionTypes/AuthTypes"

const initialState = {
    user : {}
}

const AuthReducer=(state = initialState,action)=>{
    switch (action.type) {
        case REGISTER : 
        localStorage.setItem('token', action.payload.token)
        return {...state, user : action.payload.contactNew}


        default: return state
    }
}

export default AuthReducer