const express = require('express');
const mongoose = require('mongoose');
// 链接mogo 并且使用imooc这个集合 没有会新建
const DB_URL = 'mongodb://127.0.0.1:27017/immooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})
// 类似于mySql表 mongo里有文档、字段的概念 user表
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true}
}))

// 新增数据
User.create({
    user: 'chenming',
    age: 18
}, function (err, doc) {
    if (!err) {
        console.log(doc)
    } else {
        console.log(err)
    }
})

// 删除数据
// User.remove({age: 18}, function (err, data) {
//     console.log(data)
// })
// 更新数据
User.update({user: 'chenming'}, {'$set': {age: 126}}, function (err, data) {
    console.log(data)
})

// 新建app
const app = express();

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>')
})

app.get('/data', function(req, res) {
    // findeOne 只查一条
    User.findOne({user: 'chenming'}, function (err, data) {
        res.json(data)
    }) 
    // res.json({name: 'chenming', age: 18})
})

app.listen(9093, function () {
    console.log('Node app start at port 9093')
})

// mongoose 基础使用 
/*
1. Connect 链接数据库
2. 定义文档模型，Schema 和 model 新建模型
3. Strin、Number 等数据结构
4. 定create、remove、update分别用来增删改查的操作


function selectarea_news
*/