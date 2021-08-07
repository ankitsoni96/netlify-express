const express = require('express')
const app = express();
const serverless = require('serverless-http')
const router = express.Router()
const user = require('./user')

router.get('/',(req,res)=>{
    res.json({
        message:"Working"
    })
})

router.get('/test',(req,res)=>{
        res.send(res1)
})

app.use('/.netlify/functions/api',router)
app.use('/.netlify/functions/user',user)



module.exports.handler = serverless(app)