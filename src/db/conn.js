const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mydata",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(error);
})