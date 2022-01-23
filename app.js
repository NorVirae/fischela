const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
var fileupload = require("express-fileupload");
const cloudinary = require('cloudinary').v2
const ImageList = require("./model/image")
const History = require("./model/history")


cloudinary.config({
    cloud_name: "norvirae",
    api_key: "267177314333933",
    api_secret: "qzPi3K8LNu9C66AGEPvuSW7WtP8"
  });


const app = express();

require('dotenv').config()
const cors = require('cors')


mongoose.connect(
    //'mongodb://localhost/graphit'
    process.env.DATABASE,

     {
    
        useNewUrlParser:true,
        useUnifiedTopology:true,

    
}).then(res=>{
    console.log("mongoose kinda connected successfully is that a problem?")
}).then(err=>{
    console.log(err)
})

app.use(fileupload({useTempFiles: true}));

app.use(bodyParser.json({ limit: "50mb" })); 
app.use(bodyParser.urlencoded({extended: true, limit: '50mb',
parameterLimit: 100000,}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
});

app.post("/image/upload", async (req, res)=>{
    // console.log("THE BODY",req.files)
    try{
        const data = {
            image: req.files.file.tempFilePath,
        }

        cloudinary.uploader.upload(data.image).then(async (result)=>{

            const newImage = new ImageList({
                url:result.url,
                public_id:result.public_id
            })
            const imageSave = await newImage.save()
            console.log(imageSave)
            res.send(imageSave)
        }).catch(err=>{
            console.log(err)
            res.send(err)
        })
    }catch(err){
        console.log(err)
    }
    
    

})

app.post("/image/delete", async (req, res)=>{
    console.log(req.body)
    const resz = await cloudinary.uploader.destroy(req.body.public_id, {type : 'upload', resource_type : 'image'}, (result)=>{
        console.log(result)
    } )

    res.send(resz)
   
})

app.post("/create/history", async (req, res) => {
    // console.log("history create", req.body)
    const newHistory = new History(req.body)
    console.log( await newHistory.save(), "STORED IN DB")
})

app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

const port = process.env.PORT||8000;

app.listen(8000, ()=>{
    console.log("Listening on port "+port)
})