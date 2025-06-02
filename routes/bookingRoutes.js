import express from "express"
import {createBooking,  getBooking,updateBooking} from  '../controllers/bookingController.js'

const bookingRouter = express.Router()

bookingRouter.post('/create', createBooking)
bookingRouter.get('/get',getBooking)
bookingRouter.put('/update/:id',updateBooking)

export default bookingRouter