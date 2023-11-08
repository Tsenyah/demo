const express = require('express');
const app = express();
const os = require('os');

app.get('/',(req,res)=>{
    res.send("arch: "+ os.arch())
})
app.listen(3000, function (){
    console.log(process.arch)
    console.log("app listening on port 3000 maybe?")
    console.log("arch: "+ os.arch())
})