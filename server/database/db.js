import mongoose from 'mongoose';
const Connection = async () => {
    try {
        const MONGO_URL = "mongodb+srv://user:Pranay2329@blogcluster.u3mtv.mongodb.net/BlogCluster?retryWrites=true&w=majority";
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });       
        console.log("Database Connection Successful!");
    } catch (error) {
        console.log("Database Connection failed: ",error);
    }
};

export default Connection;
