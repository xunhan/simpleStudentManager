
var router = require('express').Router(),
    Member = require('../models/Member'),
    formidable = require('formidable');

router.post('/:sid',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        if(err){
            return res.send(err);
        };
        fields.sid = req.params['sid'];
        Member.updateMember(req.params,fields,function(err,result){
            console.log('更新成功');
            res.redirect('/');
        })
    });
});

module.exports = router;