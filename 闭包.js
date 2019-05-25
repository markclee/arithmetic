// 自执行函数,每次执行开启一个局部作用域,将a传入进去,a记录每次循环的结果
// for (var a = 0; a < 10; a++) {
//   (function (tag) {
//     setTimeout(() => {
//       console.log(tag)
//     }, 100)
//   })(a)
// }
// for (let a = 0; a < 10; a++){
//     setTimeout(()=>{
//         console.log(a)
//     })
// }
// 每隔一秒输出一次
// 自执行函数,每次执行开启一个局部作用域,将a传入进去,a记录每次循环的结果
// for(var a = 0; a < 10; a++){
//     (function(tag){
//         setTimeout(()=>{
//             console.log(tag)
//         }, tag*1000)
//     })(a)
// }


// setTime中的第二个参数,会影响第一个参数执行时间
// setTimeout是函数调用,fn会立即被执行,会在三秒后执行,fn(a)的时候,会
// 第一个参数是匿名函数,会在3秒后调用
// 第一个参数是函数执行,就会立即执行,结果在3秒后再执行
// for(var a = 0; a < 10; a++){
//     setTimeout(fn(a), 100)
//     function fn(i){
//         return function(){
//             console.log(i)
//         }
//     }
// }
// 只输出7
// for (var a = 0; a < 10; a++) {
//   (function (tag) {
//     if(tag === 7){
//         setTimeout(() => {
//             console.log(tag)
//           }, 100)
//     }
//   })(a)
// }

//-------------------------------------------//
// 如下没有输出结果              当 fn() 的时候,输出undefined
for (var a = 0; a < 10; a++) {
    setTimeout(fn, 3000)
    function fn(i) {
      return function () {
        console.log(i)
      }
    }
  }


// --------------变量与this问题-----------------//
// 函数访问变量,只看变量的定义阶段
// 打印this,考虑函数是怎么调用的

// // ------------------闭包问题------------------//
// -闭包
//     -能够访问其它函数内变量的函数(能够访问私有变量的函数),成为闭包
//     -返回一个函数
// 闭包改造
// -返回一个对象,用对象包裹函数,在函数内操作变量后,在返回
//     ```js
//         function fn(){
//             var num = 10
//             return {
//                 get num(){
//                     return num
//                 },
//                 set num(n){
//                     num += n
//                 }
//             }
//         }
//         var a = fn()
//         console.log(a)
//         console.log(a.num)
//         a.num = 10
//         console.log(a.num)
//     ```
// ----------------------vue底层原理-------------------------//

