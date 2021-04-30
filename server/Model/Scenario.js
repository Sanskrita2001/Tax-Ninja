const mongoose = require('mongoose');

const scenarioSchema = new mongoose.Schema({
    salary:{
        type: Number,
        required: [true, 'Please enter a salary']
    },
    HRA:{
        type: Number,
        required: [true, 'Please enter a HRA']
    },
    LTA:{
        type: Number,
    },
    gratuity:{
        type: Number,
    },
    foodCouponAllowance:{
        type: Number,
    },
    leasedCarCompany:{
        type: Number,
    },
    telephoneExpenses: {
        type: Number
    }
})

module.exports = new mongoose.model('Scenario', scenarioSchema);