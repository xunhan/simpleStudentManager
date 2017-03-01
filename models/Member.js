var mongoose,
    memberSchema,
    Member;

mongoose = require('mongoose');

// 构建 成员 Schema
memberSchema = new mongoose.Schema({
    'sid':Number,
    'Name':String,
    'sex':String,
    'age':Number,
    'courses':[String]
});
// 唯一索引
memberSchema.index({ "sid": 1});

Member = mongoose.model('Member',memberSchema);

// 接口
module.exports= {
    'addMember':addMember,
    'getAllMembers':getAllMembers,
    'findOneMember':findOneMember,
    'updateMember':updateMember,
    'deleteMember':deleteMember
}


function getAllMembers(cb){
    Member.find({},(err,result)=>{
        cb(err,result);
    })
}
// 添加成员
function addMember(obj,cb){
    Member.create(obj,(err,result)=>{
        cb(err,result);
    })
}

function findOneMember(condition,cb){
    Member.findOne(condition,(err,result)=>{
        cb(err,result);
    })
}

function updateMember(condition,updateDate,cb){
    Member.findOneAndUpdate(condition,updateDate,(err,result)=>{
        cb(err,result);
    })
}

function deleteMember(condition,cb){
    Member.findOneAndRemove(condition,(err,result)=>{
        cb(err,result);
    })
}
