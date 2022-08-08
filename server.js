const express = require("express")
const app = express() ;
const dotenv = require("dotenv")
const PORT = process.env.PORT || 8080 ;
const mongoose = require("mongoose")
const cors = require("cors")
// const model = require("./model/registerschema")

dotenv.config({path :  "./config.env"})
const router = require("./routes/routes");


app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(router);

const DB = process.env.DATABASE 

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.on('connected',()=>{
    console.log('connected')
})
mongoose.connection.on('error',(err)=>{
    console.log('error',err)
})




if(process.env.NODE_ENV == "production"){

   app.use(express.static("frontend/build"));
   const path = require("path")
   app.get("*" , (req,res) =>{

    res.sendFile(path.resolve(__dirname , "frontend" , "build" , "index.html"  ))

   } )


}

app.listen(PORT , ()=>{
    console.log(`server is listening on ${PORT}`)
})