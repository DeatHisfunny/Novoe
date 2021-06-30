require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index.js');
const errorMiddleware = require('./middlewares/error-middelware');
mongoose.set('useCreateIndex', true); //error(node:5988) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.


const PORT= process.env.PORT || 4000;
const app=express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
app.use(errorMiddleware);
const start = async () => {
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
app.listen(PORT, () => console.log(`Server started PORT= ${PORT}`))
    }
        catch (e){
        console.log(e);
        }
}
start()