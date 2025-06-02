import mongoose from "mongoose";


const connectDB = async ()=>{
    mongoose.connection.on('conncected',()=>{
        console.log("DB connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/hyphomzbackend`)
}

export default connectDB;