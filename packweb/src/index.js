// 程序的入口文件,所有资源都在这引入,所有的资源都通过index.js加载
// 使用es6规范,引入

//引入js文件
// import a from './a.js'
//引入css
import './css/index.css'
import './css/b.css'

//引入less 
import './less/index.less'
import './scss/index.scss'
import { Domain } from 'domain';
//引入字体文件
// import 'bootstrap/disk/css/bootstrap.css' 


// let a = require('./a.js')
// console.log(a)
// console.log('我是index.js!!')
// console.log('1222')
// window.onload = function(){
//     document.querySelector('ul').style = 'none'
//     document.querySelector('li').style.backgroundColor = "red"
// }
// setTimeout(function(){
//     console.log('我是普通的setTimeout函数')
// }, 1000)
// setTimeout(()=>{
//     console.log('我是用了箭头函数的setTimeout函数')
// })

// class Person {
//     constructor(name){
//         this.name = name
//     }
// }
// let p = new Person('小黑')
// console.log(p)

// class Dog {
//     //创建狗对象时候,默认name为大黄
//     name = 'dahuang'
//     //静态成员
//     static color = 'yellow'
// }
// let d = new Dog()
// console.dir(d)
// function *fn(){
//     yield 11
//     yield 21
//     return 31
// }
// let newFn = fn()
// console.log(newFn.next())
// console.log(newFn.next())
// console.log(newFn.next())

// let arr = []
// arr.forEach()
// arr.some()
// arr.reduce()

// es6方法
// js是一门动态语言,在代码执行时候,可以动态为对象属性添加方法
// String.prototype.indexOf 只要执行到的时候,才知道有哪些方法
// babel看到对象调用方法时候,默认不会转换
// includes这样的新方法,默认不会转换 
// arr.includes()

let str = '123'
console.log(str.includes('2'))
