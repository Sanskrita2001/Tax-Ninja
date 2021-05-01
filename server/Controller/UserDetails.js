const UserDetails = require('../Model/UserDetails');
const asyncHandler = require('express-async-handler');

exports.enterDetails = asyncHandler(async(req, res)=>{
    const details = await UserDetails.create(req.body);
    if(details){
        res.status(200).json(details)
    } else{
        res.status(404)
        throw new Error('Couldnt entwe the details')
    }
})

exports.getDetails = asyncHandler(asyncHandler(async(req, res)=>{
    const details = await UserDetails.find();
    if(details){
        res.status(200).json(details)
    } else{
        res.status(404)
        throw new Error('Couldnt entwe the details')
    }
}))