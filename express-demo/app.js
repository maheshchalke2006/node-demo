console.log('Express install done');

var express = require('express');

//console.log(express);

var app = express();

app.use(express.static(__dirname + "/css"));

//This function uses callback method.
app.listen(3000, () =>{
    console.log('Server started')
});

app.use("log",(req, res, next) => {
    console.log(req.url + new Date());
    next();
})

//app.listen(3000); // Port number to start webserver , it will create server.

app.get("/",(req,res)=>{
    res.send("Express Done");
});

app.get("/service/data", (req, res) => {
    res.json({ 'name': 'express', 'type': 'service'})
});

app.get("/index", (req, res) => {
    res.sendfile(__dirname + "/index.html");
});

app.get("/server/all", (req, res) => {
    res.json([
        { 'user': 'user1'},
        { 'user': 'user'}
    ])
});

app.get("/login", (req, res) => {
    res.sendfile(__dirname + "/login.html");
});

var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended:true}));
app.use(bodyparser.json());


app.post("/login", (req, res) => {
    console.log(req.body);
    console.log(req.body.username);
    if(req.body.username != 'Mahesh'){
        res.sendStatus("401");
    }
    res.sendfile(__dirname + "/login.html");
});

