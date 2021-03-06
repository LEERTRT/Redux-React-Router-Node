const express = require('express');
const Router = express.Router();
const models = require('./model');
const User = models.getModel('user');

Router.get('/list', (req, res)=>{;
    User.find({}, (err, doc)=>{
        return res.json(doc);
    })
});
Router.post('/register', (req, res)=>{
    console.log(req.body);
    const {user,pwd,type} = req.body;
    User.findOne({user:user}, (err,doc)=>{
        if(doc){
            return res.json({code:1, msg:'用户名重复'})
        }
        User.create({user,pwd,type}, (err,doc)=>{
            if(err){
                return res.json({code:1, msg:'后端出错了'});
            }
            return res.json({code:0})
        })
    })
});
Router.get('/info', (req, res)=>{
    //用户有没有cookie
    return res.json({code:0})
});
module.exports = Router;