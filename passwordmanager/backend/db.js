const mongoose = require('mongoose')
const mongoURL = "mongodb+srv://praneethchilukuri03:safevault123@safevault.yzfd3fh.mongodb.net/passmanager"

const connectToMongo = () =>{
    mongoose.connect(mongoURL).then(()=>console.log("Connected")).catch((e)=>console.log(e.message))
}

module.exports = connectToMongo