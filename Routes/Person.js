const express = require('express')

const personRouter = express.Router()

const { SignUp, SignIn } = require('../Controllers/Person');
const { VerifSignUp, Validation, VerifSignIn } = require('../Middlewares/VerifMid');
const { IsAuth } = require('../Middlewares/IsAuth');

personRouter.post('/SignUp',VerifSignUp, Validation, SignUp)

personRouter.post('/SignIn',VerifSignIn,Validation,SignIn)

personRouter.get('/CurrentUser',IsAuth,(req,res)=> res.send(req.user))



module.exports = personRouter