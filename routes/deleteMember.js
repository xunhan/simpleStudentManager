var router = require('express').Router(),
    Member = require('../models/Member');

router.get('/:sid',function(req,res,next){
    Member.deleteMember(req.params['sid'],function(err,result){
        if(err){
            return res.send(err);
        };
        console.log('删除成功');
        res.redirect('/');
    })
});

module.exports = router;