const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());



const connDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`DB connected`)
    } catch (error) {
        console.log('Error')
    }
}

connDB();

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started at port ${process.env.PORT}`));