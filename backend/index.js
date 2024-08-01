const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express()
const cors = require("cors")
const formRoute = require("./routes/form-route")



app.use(express.json())
app.use(cors());
app.use("/",formRoute)




mongoose.connect("mongodb+srv://mazhar:mazhar123@mydatabase.fbzxbm2.mongodb.net/?retryWrites=true&w=majority&appName=mydatabase").then(()=>{
    console.log("Database Connected");
}).catch((error)=>console.log(error))


app.listen(8000,()=>{
    console.log("listening from port 8000");
})

app.get("/",(req,res)=>{
 res.send("Hello from the other side")
})