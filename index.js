var express=require('express');
var bodyParser = require('body-parser');
var app=express();

// connect db
app.use(bodyParser.json())
app.use(express.static('public'));

app.post('/manager/login', function(req,res) {
    if(req.body.username == 'admin' && req.body.password == '1234') {
        res.status(200).send({})
        return
    }
    res.status(401).send({ message: 'your username and password dont match'})
});


app.post('/customer', function(req,res) {
    if(req.body.name && req.body.age) {
        // save to db
        res.status(200).send({})
        return
    } 
    res.status(400).send({ message: 'bad request'})
});


var server=app.listen(3000,function() {
    console.log('- started -')
});