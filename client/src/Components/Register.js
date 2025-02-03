import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { register } from '../Redux/Actions/AuthAction';
const Register=()=>{

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister=(e)=>{
        e.preventDefault()
        dispatch(register({name,email,password}, navigate))
    }
    return(
        <div>
           <Form>

                <Form.Group className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
            
                <Button onClick={(e)=> handleRegister(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Register