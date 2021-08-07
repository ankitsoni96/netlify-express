const express = require('express')
const app = express();
const serverless = require('serverless-http')
const router = express.Router()

router.get('/',(req,res)=>{
    res.json({
        message:"Working"
    })
})

router.get('/test',(req,res)=>{
    db.select('students','*').then((res1)=>{
        res.send(res1)
    })
})

app.use('/.netlify/functions/api',router)


module.exports.handler = serverless(app)