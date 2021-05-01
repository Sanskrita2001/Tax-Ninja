const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    salary: {
        type: Number,
        required: true
    }, 
    deductions: {
        PFContribution: {
            type: Number
        }, 
        ELSS:{
            type: Number
        }, 
        tuition:{
            type: Number
        },
        LifeInsurance: {
            type: Number
        },
        LinkedInsurance:{
            type: Number
        },
        nationalSavings:{
            type: Number
        },
        fiveYearTermDeposit:{
            type: Number
        }
    },
    exemptions: {
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
    },
    additionalIncome: {
        type: Number
    }
})

module.exports = new mongoose.model('UserDetails', userDetailsSchema);