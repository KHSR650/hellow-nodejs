const express = require('express')

const app = express()


app.get('/',(req,res,next)=>{

res.send("<html><head></head><body><br><h1> Hello world APIS</h1> </body> </html>")
})
app.listen(4000,()=>{
console.log("Sever is running on 4000")
})
