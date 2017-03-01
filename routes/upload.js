var router = require('express').Router(),
    Member = require('../models/Member'),
    formidable = require('formidable');
    
router.post('/',function(req,res,next){
    var form = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
        Member.addMember(fields,function(err,result){
            if(err){
                return res.send(err);
            };
            console.log('添加成功');
            res.redirect('/');
        })
    })
});

module.exports = router;

    