import express from 'express'
import userRouter from './routes/userRoute.js'
import bookingRouter from './routes/bookingRoutes.js'
import connectDB from './config/mongodb.js'
import 'dotenv/config.js'
import serviceRouter from './routes/serviceRoute.js'
import paymentRouter from './routes/paymentRoute.js'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'

const limiter = rateLimit({
    windowMs:15*60*1000,
    max:10,
    message:{
        success:false,
        message:"TO MANY REQUEST, PLEASE TRY AGAIN LATER"
    }
})





const app = express()
app.use(limiter);
const port = process.env.PORT || 4002
connectDB()


app.use(express.json())
app.use(morgan('dev'))

app.use('/api/user',userRouter)
app.use('/api/booking',bookingRouter)
app.use('/api/service',serviceRouter)
app.use('/api/payment',paymentRouter)


app.listen(port,()=>{
    console.log("server started on PORT :" + port)
})