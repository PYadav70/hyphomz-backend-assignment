import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    serviceId:{type:mongoose.Schema.Types.ObjectId, required:true, ref: 'Service'},
    customerId:{type:mongoose.Schema.Types.ObjectId, required:true, ref: 'User'},
    bookingTime:{type:Date, required:true},
     status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "cancelled"],
    default: "pending"
  }
},{timestamps:true})

const bookingModel = mongoose.models.booking || mongoose.model("booking",bookingSchema)

export default bookingModel