var express = require('express'),
  app = express(),
  path = require('path'),
  db = require('./lib/db.js');

var index = require('./routes/index'),
    update = require('./routes/update'),
    upload = require('./routes/upload'),
    updateMember = require('./routes/updateMember'),
    deleteMember = require('./routes/deleteMember');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// 首页
app.use('/',index);

// 新增 成员
app.use('/uploadMember',upload);

// 修改页面
app.use('/update',update);

app.use('/updateMember',updateMember);

app.use('/deleteMember',deleteMember);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;