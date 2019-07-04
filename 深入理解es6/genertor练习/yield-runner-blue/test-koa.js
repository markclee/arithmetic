const koa=require('koa');
const runner=require('./index');

var app=koa();
app.listen(8080);

app.use(function *(){
  this.body=yield runner(show);
});

function* show(){
  return 12;
}
