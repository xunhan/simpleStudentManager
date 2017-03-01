var router = require('express').Router(),
    Member = require('../models/Member');

router.get('/',function(req,res,next){
    Member.getAllMembers(function(err,result){
        if(err){
            return res.send(err);
        };
        res.render('index',{
            'members':result
        });
    })
});

module.exports = router;
