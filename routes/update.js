var router = require('express').Router(),
    Member = require('../models/Member');

router.get('/:sid',function(req,res,next){
    // console.log(req.params)
    Member.findOneMember(req.params,function(err,result){
        if(err){
            return res.send(err);
        };
        res.render('update',result);
    })
});

module.exports = router;
