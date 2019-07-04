// var event = [];
// for (let i=0; i<3; i++){
//     event[i] = function (){
//         console.log(i)
//     }
// }

// event[8]()


// {
//     let i = 0
//     event[0] = function(){
//         console.log(i)
//     }
// }
//
// {
//     let i = 1
//     event[1] = function(){
//         console.log(i)
//     }
// }
//
// {
//     let i = 2
//     event[2] = function(){
//         console.log(i)
//     }
// }



// event 是一个数组
/*
    {
        作用域空间 1 xxff00
        i = 1
        function () {
            console.log(i)
        }
    }

    {
        作用域空间 2 xxff01
        i = 2
        function () {
            console.log(i)
        }
    }

*   [
*       xxff00,
*       xxff01,
*       function () { console.log(i) }
*   ]
*
*
*   i = 3
*
*   event[0]()
* */



// function fn() {
//     var num = 10
//
//     return {
//         getNum () {
//             return num
//         },
//
//         setNum (n) {
//             num += n
//         }
//     }
//
// }
//
// var a = fn()
// console.log(a.getNum())
// a.setNum(10)
// console.log(a.getNum())


// function fn() {
//     var num = 10
//
//     return {
//         get getNum () {
//             return num
//         },
//
//         set setNum (n) {
//             num += n
//         }
//     }
//
// }
//
// var a = fn()
// console.log(a.getNum)
// a.setNum = 10
// console.log(a.getNum)


function fn() {
    var num = 10

    return {
        get num () {
            return num
        },

        set num (n) {
            num += n
        }
    }

}

var a = fn()

console.log(a)
console.log(a.num)
a.num = 10
console.log(a.num)



