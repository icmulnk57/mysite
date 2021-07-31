const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://aman:Mamata@4457@cluster0.th54q.mongodb.net/myfirstwebsite?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("connection successful")
}).catch((error)=>{
    console.log(`no connection`);
})