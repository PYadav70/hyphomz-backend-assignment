import express from 'express'
import userRouter from './routes/userRoute.js'
import bookingRouter from './routes/bookingRoutes.js'
import connectDB from './config/mongodb.js'
import 'dotenv/config.js'
import serviceRouter from './routes/serviceRoute.js'

const app = express()
const port = process.env.PORT || 4002
connectDB()


app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/booking',bookingRouter)
app.use('/api/service',serviceRouter)


app.listen(port,()=>{
    console.log("server started on PORT :" + port)
})