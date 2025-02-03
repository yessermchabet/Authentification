import { REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'

export const register=(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/auth/SignUp',newUser)

        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )

        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}