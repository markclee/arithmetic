const runner=require('./index.js');


//run for no-result
function aaa(){
  return new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve(12);
    }, 50);
  });
}

runner(function *(){
  var a=yield aaa();

  console.log(`I get a \'${a}\'`);
  console.log();
});

//run for error maybe
function bbb(){
  return new Promise((resolve, reject)=>{
    setTimeout(function (){
      if(Math.random()<0.5){
        resolve(55);
      }else{
        reject(new Error('this is a testing error'));
      }
    }, 50);
  });
}

runner(function *(){
  var b=yield bbb();
  console.log(`I get a \'${b}\'`);

  var a=yield aaa();
  console.log(`I get a \'${a}\'`);
  console.log();
}).catch((err)=>{
  console.error('here is an error occurred: ', err.message);
  console.log();
});

//run for result
function num1(){
  return new Promise((resolve, reject)=>{
    resolve(5);
  });
}
function num2(){
  return new Promise((resolve, reject)=>{
    resolve(12);
  });
}

runner(function *(){
  var a=yield num1();
  var b=yield num2();

  return a+b;
}).then((res)=>{
  console.log(`The result is ${res}`);
  console.log();
}, (err)=>{
  console.error(err);
});
