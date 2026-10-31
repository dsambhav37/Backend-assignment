iimport mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {
      family: 4, // Use IPv4 - fixes SSL error
    });
    console.log(`\nMongoDB connected! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;

