const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/imooc-chat');
mongoose.connection.on('connected',()=>{
    console.log('success')
});
const models = {
    user:{
        user:{type:String, require: true},
        pwd:{type: String, require:true},
        type:{type:String, require:true},
        avatar:{type:String},
        desc:{type:String},
        //职位名
        title:{type:String},
        //boss还有2个字段
        company:{type:String},
        money:{type:String}
    },
    chat:{

    }
};
for(let m in models){
    /*在 Mongoose 中，所有数据都由一个 Schema 开始创建。
    每一个 schema 都映射到一个 Mongodb 的集合(collection)，
    并定义了该集合(collection)中的文档(document)的形式。*/
    mongoose.model(m, new mongoose.Schema(models[m]));
}
module.exports = {
    getModel: function(name){
        return mongoose.model(name);
    }
}