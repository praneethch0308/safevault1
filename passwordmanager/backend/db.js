const mongoose = require('mongoose')
const mongoURL = "YOUR_URL"

const connectToMongo = () =>{
    mongoose.connect(mongoURL).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo
