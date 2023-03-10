
const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./Routes/User.route")
const {postRouter} =require("./Routes/Post.router")
const {authenticate}=require("./middleware/Authenticate.middlewear")
const cors=require("cors")
require("dotenv").config()
const app=express()

app.use(express.json())
app.use(cors({
    origin:"*"
}))





app.get("/",(req,res)=>{
    res.send("WELCOME")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use("/posts",postRouter)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to db ")
    }

    catch(err){
        console.log("something is wrong")
    }

    console.log("SERVER IS RUNNING AT PORT 8080")
})