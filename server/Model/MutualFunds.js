const mongoose = require('mongoose');

const mutualFundSchema = new mongoose.Schema({
    schemeCode: {
        type: String, 
        required: true
    },
    ISINPayout:{
        type: String
    },
    rate:{
        type: Number,
        required: true
    },
    ISINReinvestment:{
        type: String
    },
    netAssetValue: {
        type: Number,
        required: true
    },
    schemeName: {
        type: String
    },
    Date:{
        type: Date
    },
    schemeType: {
        type: String,
        required: true
    },
    schemeCategory:{
        type: String,
    },
    mutualFundFamily:{
        type: String,
        required: true
    }
})

module.exports = new mongoose.model('MutualFunds', mutualFundSchema);