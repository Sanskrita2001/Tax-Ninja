const User = require('../Model/Auth');
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateTokens');

exports.authUser = asyncHandler(async(req, res)=>{
    const {name, email, role, password} = req.body;

    const user = await User.findOne({email});

    if(user && await user.matchPassword(password)){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: generateToken(user._id)
        }) 
    } else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
    await Auth.create({
        name,
        email,
        password,
        role
    })

    res.send({
        name,
        email,
        password,
        role,
        token: generateToken(user._id)
    })
})

exports.registerUser = asyncHandler(async(req, res) => {
    const {name ,email, password, role} = req.body

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    const user = await User.create({
        name,
        email, 
        password,
        role
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else{
        res.status(400)
        throw new Error('Invalid User data')
    }
})

exports.getUserDetails = asyncHandler(async(req, res) => {
        const user = await User.findById(req.user._id)
        if(user){
    
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            })
        } else{
            res.status(404)
            throw new Error('User not fond')
        }
})