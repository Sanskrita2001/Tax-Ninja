const asyncHandler = require('express-async-handler');
const MutualFund = require('../Model/MutualFunds')

exports.createMutualFunds = asyncHandler(async(req, res)=>{
    const fund = await MutualFund.create(req.body);
    if(fund){
        res.status(200).json(fund)
    } else{
        res.status(404)
        throw new Error('Couldnt upload mutual funds');
    }
})

exports.getMutualFunds = asyncHandler(async(req, res)=>{
    const fund = await MutualFund.find(req.query);
    if(fund){
        res.status(200).json(fund)
    } else{
        res.status(404)
        throw new Error('couldnt get fund')
    }
})