import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    providerId:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true},
    title:{type: String, required:true},
    description:{type: String, required:true},
    price:{type:Number, required:true}
})

const serviceModel = mongoose.models.Service || mongoose.model('Service',serviceSchema)

export default serviceModel