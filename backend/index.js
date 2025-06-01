import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import tourRouter from './routes/tour.js'
import userRouter from './routes/users.js'
import authRouter from './routes/auth.js'
import reviewRouter from './routes/reviews.js'
import bookingRouter from './routes/bookings.js'

dotenv.config()
const app=express();
const port=process.env.PORT || 8000;
const corsOptions={
    origin:true,
    credentials:true
}
//for testing
app.get('/',function(req,res,next){

    res.send("api is working");

});
//databaseconnection
mongoose.set("strictQuery",false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, useUnifiedTopology: true 
        });
        console.log("MongoDB database connected");
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
       
    }
};

//middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tour',tourRouter)

app.use('/api/v1/user',userRouter)
app.use('/api/v1/auth',authRouter)
app.use('/api/v1/review',reviewRouter)
app.use('/api/v1/booking',bookingRouter)


app.listen(port,()=>{
    connect();
    console.log('server is runing on',port);
})