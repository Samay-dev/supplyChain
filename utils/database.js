import mongoose from "mongoose";

let isConnected = false; // track the connection status

export async function connectToDB() {
    console.log('Inside connectToDB')
    await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'share_prompt',
        userNewUrlParser: true,
        useUnifiedTopology: true
    })
    /*mongoose.set('strictQuery', true);
    console.log('Inside connectToDB');

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        console.log('Inside try')
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
            userNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
*/}