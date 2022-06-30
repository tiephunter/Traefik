const express = require('express'); 
const app = express(); 

const args = process.argv.slice(2)
const port = args[0]; 

countProduct = 0;
countOrder = 0;
countShip = 0;

app.get('/', function(req, res){
    res.send("Hello World");
})

app.get('/product', function(req, res){
    console.log("Request " + ++countProduct + " from client to port "+port);
    res.send("Wellcome to Product service at port" + port );
})

app.get('/order', function(req, res){
    console.log("Request " + ++countOrder + " from client to port "+port);
    res.send("Wellcome to Order service at port" + port );
})

app.get('/ship', function(req, res){
    console.log("Request " + ++countShip + " from client to port "+port);
    res.send("Wellcome to Ship service at port" + port );
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})
