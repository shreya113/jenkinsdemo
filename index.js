const express = require("express");

const app = express()

app.get('/',(req, res)=>{
    console.log("Index page logged in the logs - modified")
    res.send("<h1>This is index page - modified</h1>")

})

app.get('/about',(req, res)=>{
    console.log("About page logged in the logs")
    res.send("<h1>This is about page</h1>")

})
app.listen(3000)