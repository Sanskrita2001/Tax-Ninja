const Scenario = require('../Model/Scenario');
const asyncHandler = require('express-async-handler');

exports.enterScenario = asyncHandler(async(req, res)=>{
    const scenario = await Scenario.create(req.body);
    if(scenario){
        res.json(scenario);
    } else{
        res.status(404)
        throw new Error("Couldnt create a scenario");
    }
})

exports.getScenario = asyncHandler(async(req, res)=>{
    const scenario = await Scenario.find(req.query);
    if(scenario){
        res.json(scenario);
    } else{
        res.status(404);
        throw new Error('Couldnt get a required scenario');
    }
})

exports.getScenarioById = asyncHandler(async(req, res)=>{
    const scenario = await Scenario.findById(req.params.id);
    if(scenario){
        res.json(scenario)
    } else{
        res.status(404);
        throw new Error('Couldnt get scenario with the required id');
    }
})