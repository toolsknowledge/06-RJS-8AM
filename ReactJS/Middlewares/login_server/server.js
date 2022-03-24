const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");

const app = express();

app.use(cors());

app.use(express.json());

const ashokIT = mongodb.MongoClient;

//middleware
const token_middleware = (req,res,next)=>{
    const headers = req.headers;
    if(headers.token === "ashokit"){
        next();
    }else{
        res.send({"auth":"Authentication Failure !!!"});
    }
}

app.post("/login",[token_middleware],(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@06-ng-11am.bskgx.mongodb.net/redux-middleware?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("redux-middleware");
            db.collection("login_details").find({"email":req.body.email,"password":req.body.password}).toArray((err,array)=>{
                if(err) throw err;
                else{
                    if(array.length>0){
                        res.send({"login":"success"});
                    }else{
                        res.send({"login":"fail"});
                    }
                }
            })
        }
    })
});


app.listen(8080,()=>{
    console.log("server listening the port number 8080");
}); 
