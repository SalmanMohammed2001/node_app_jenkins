const express =require("express")
const app=express()
const port =3000

app.get("/",(req,res)=>{
    res.status(200).json({message:'Success. update1..'})
})

app.listen(port,()=>{
    console.log("server Start 3000")
})