const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const {notFound, errorHandler} = require("./middleware/errorMiddleware")

const app = express();
dotenv.config();
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());

//import routes
const userRoutes = require('./Routes/User');
const scenarioRoutes = require('./Routes/Scenario');
const detailsRoutes = require('./Routes/UserDetails');

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

app.use('/api', userRoutes);
app.use('/api/scenario', scenarioRoutes);
app.use('/api/details', detailsRoutes);
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server started at port ${process.env.PORT}`));