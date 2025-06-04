import express from "express"
import {createBooking,  getBooking,updateBooking} from  '../controllers/bookingController.js'
import adminMiddleware from "../middleware/adminMiddleware.js"

const bookingRouter = express.Router()

bookingRouter.post('/create',adminMiddleware, createBooking)
bookingRouter.get('/get',adminMiddleware,getBooking)
bookingRouter.put('/update/:id',adminMiddleware,updateBooking)

export default bookingRouter