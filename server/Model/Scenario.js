const mongoose = require('mongoose');

const scenarioSchema = new mongoose.Schema({
    totalExemption: {
        type: Number,
        required: true
    },
    totalDeduction: {
        type: Number,
        required: true
    },
    taxableIncome: {
        type: Number,
        required: true
    },
    savings: {
        type: Number,
        required: true
    },
    totalTaxes: {
        type: Number,
        required: true
    }
 
})

module.exports = new mongoose.model('Scenario', scenarioSchema);