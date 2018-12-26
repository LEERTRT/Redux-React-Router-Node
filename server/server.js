const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app =  express();
//中间件
const userRouter = require('./user');
app.use(cookieParser());
app.use(bodyParser.json());
//开启一个中间件
//在一个路径上挂载一个中间件之后，每当请求的路径的前缀部分匹配了这个路由路径，
// 那么这个中间件就会被执行
app.use('/user', userRouter);
app.listen(9093, ()=>{
    console.log('Node app start at port 9093')
});
