const express = require('express');
const app = express();
const db = require('./db.js');


const server = app.listen(8080,function(){console.log('Server ready');})

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//adding the file you want to fetch details from
app.get('/new',function(req,res){
    res.sendFile(__dirname + '/sign-up.html')
})

app.post('./adder',function(req,res){
    console.log(req.body);
    console.log(req.body['first']);
})
//inserting new data
app.post('./adder',function(req,res){
    console.log(req.body);
    console.log(req.body['first']);
})
//get user by ID
app.get('/users/:id',function(req,res){
    const query = "SELECT * from users where id = ?"
    console.log(req.params.id);
    const params = [req.params.id];
    db.all(query,params,function(err,row){
        if(err){
            throw err;
        }
        res.json({'status':row})
    })
})

//list user in a webpage 
app.get('/users',function(req,res){
    const query = "SELECT * from users";
db.all(query,function(err,rows){
    if(err){
        throw err;
    }
    res.json({'status':rows})
})
    
})
app.get('/recruiter',function(req,res){
    const query = "SELECT * from recruiter";
db.all(query,function(err,rows){
    if(err){
        throw err;
    }
    res.json({'status':rows})
})
    
})

app.get('/',function(req,res){
    
    res.json({'status':'server running'})
})
