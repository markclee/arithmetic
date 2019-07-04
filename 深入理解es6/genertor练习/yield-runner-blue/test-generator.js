const runner=require('./index');

function *gen(){
  var a=yield 12;
  var b=yield 5;

  return a+b;
}

runner(function* (){
  var num=yield gen;

  console.log(num);   //excepted 17
});
