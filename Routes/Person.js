const express = require('express')

const personRouter = express.Router()

const { SignUp, SignIn } = require('../Controllers/Person');


personRouter.post('/SignUp', SignUp)

personRouter.post('/SignIn',SignIn)



module.exports = personRouter