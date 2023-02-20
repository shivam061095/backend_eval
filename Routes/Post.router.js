const express=require("express")

const postRouter=express.Router()
const {PostModel}=require("../model/post.model")

postRouter.get("/",async(req,res)=>{
    const notes=await PostModel.find()
    res.send(notes)
    
})
postRouter.post("/create",async(req,res)=>{
    payload=req.body
    const note=new PostModel(payload)
    await note.save()
    res.send({"msg":"succesfully created"})
    
})


postRouter.delete("/delete/:id",async(req,res)=>{
    const noteID=req.params.id
    const user=await new PostModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":`note with id :${noteID} is deleted`})

})


module.exports={
    postRouter
}