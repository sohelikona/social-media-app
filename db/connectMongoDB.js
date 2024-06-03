import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected: ${connect.connection.host}`); 
    } catch (error) {
        console.log(error(`Error connection to mongoDB: ${error.message}`))
        process.exit(1);
    }
}

export default connectMongoDB;