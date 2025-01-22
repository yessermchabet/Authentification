const { body ,validationResult } = require('express-validator');


exports.VerifSignUp = [
    body('email','Is not an email').isEmail(),
    body('password','Your password must contain at least 8 char').isLength({min : 8})
]


exports.VerifSignIn= [
    body('email','Is not a valid email').isEmail(),
    body('password', 'Your password 8').isLength({min : 8})
]





exports.Validation=(req,res,next)=>{
    const result = validationResult(req)

    if (!result.isEmpty()) {
        return res.status(400).send(result)
    }

    next()
}