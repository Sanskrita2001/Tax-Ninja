const mongoose = require('mongoose');

const mutualFundSchema = new mongoose.Schema({
    schemeCode: {
        type: String, 
        required: true
    },
    ISINGrowth:{
        type: String,
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
        type: String,
        required: true
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