const mongoose = require('mongoose');

const db = async()=>{
    try{
        mongoose.set("strictQuery",false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected")
    }
    catch(e){
        console.log("Something went wrong while connecting to Database")
    }
}


module.exports={db}