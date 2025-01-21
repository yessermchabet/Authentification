const  bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');
const Person = require('../Models/Person');

exports.SignUp=async(req,res)=>{
    try {
        const {email, password} = req.body

        const found = await Person.findOne({email})

        if (found) {
            return res.status(400).send({errors : [{msg : 'Email already exists'}]})
        }

        const contactNew = new Person(req.body)

        const saltRounds = 10
        const salt = bcrypt.genSaltSync(saltRounds)
        const hashedPassword = bcrypt.hashSync(password, salt)

        contactNew.password = hashedPassword

        await contactNew.save()

        const payload = { id:  contactNew._id}
        var token = jwt.sign( payload, process.env.privateKey,{ expiresIn: '1h' });


        res.status(200).send({msg : 'Account created', contactNew, token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not create account'}]})
    }
}

exports.SignIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await Person.findOne({email})
 

        if (!found) {
            return res.status(400).send({errors : [{msg : 'Email doesnt exist'}]})
        }

        const matched = bcrypt.compareSync(password, found.password)
    
        if (!matched) {
            return res.status(400).send({errors : [{msg : 'Wrong password'}]})
        }

        const payload = { id:  found._id}
        var token = jwt.sign( payload, process.env.privateKey,{ expiresIn: '1h' });


        res.status(200).send({msg : 'Logged In', found, token})


    } catch (error) {
        res.status(500).send({errors : [{msg : 'Could not logged in'}]})
    }
}