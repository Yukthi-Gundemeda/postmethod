const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=2500

app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

app.use(cors())

app.get("/",(req,res)=>{
    res.send("running")
})
app.post("/newData",(req,res)=>{
	//const name=req.body.name,age=req.body.age
	const{name,passwd}=req.body;
    console.log(name,passwd)
    res.send("added successfully")
})
app.listen(port,()=>console.log("server is loading"))