# yield-runner-blue

## Install

```sh
$npm install yield-runner-blue
```

## Introduction
This is a generator(yield) runner for ES6 script, like modern browser or Node.js

You can use this simply like this:

```js
const runner=require('yield-runner-blue');

runner(function *(){
  var a=yield aaa();

  console.log(`I get a \'${a}\'`);
});

function aaa(){
  return new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve(12);
    }, 50);
  });
}
```

## Error handling
Actually, the runner return a Promise object for task-tracing and error-handing, so you can do like this:

```js
const runner=require('yield-runner-blue');

runner(function *(){
  var b=yield bbb();
  console.log(`I get a \'${b}\'`);

  var a=yield aaa();
  console.log(`I get a \'${a}\'`);
}).catch((err)=>{
  console.error('here is an error occurred: ', err.message);
});

function aaa(){
  return new Promise((resolve, reject)=>{
    setTimeout(function (){
      resolve(12);
    }, 50);
  });
}

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
```

## Task tracing
You can simply tracing task by using a then function, like Promise(This is just a Promise, Actually):

```js
const runner=require('yield-runner-blue');

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
```

## With other generator function
You can use this runner with another generator

```js
const runner=require('yield-runner-blue');

function *gen(){
  var a=yield 12;
  var b=yield 5;

  return a+b;
}

runner(function* (){
  var num=yield gen;

  console.log(num);   //excepted 17
});
```

## With other runner
You can use this runner together with other runners(like KOA), here is an example for KOA:

```js
const koa=require('koa');
const runner=require('yield-runner-blue');

var app=koa();
app.listen(8080);

app.use(function *(){
  this.body=yield runner(show);
});

function* show(){
  return 12;
}
```

## Community
If you like to discuss this module, you can send me a email:

[blue@zhinengshe.com](mailto:blue@zhinengshe.com)
