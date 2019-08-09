const fetch = require('node-fetch')

// async function getZhiHuColumn(id){
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     // await 接受resolve回调的返回值
//     const response =  await fetch(url)
//     return await response.json()
// }
// // async 接受一个promise
// getZhiHuColumn('feweekly123')
// .then(column=>{
//     console.log(`NAME: ${column.name}`)
//     console.log(`INTRO: ${column.intro}`)
// })

//--------------async与箭头函数结合-------------
// const getZhiHuColumn = async (id)=>{
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     // await 接受resolve回调的返回值
//     const response =  await fetch(url)
//     return await response.json()
// }
// // async 在顶级作用域中使用，必须用立即执行函数包裹
// (async()=>{
//     const column = await getZhiHuColumn('feweekly')
//     console.log(`NAME: ${column.name}`)
//     console.log(`INTRO: ${column.intro}`)
// })()
//--------------async与类 结合使用
// class APIClient{
//     async getColumn(id){
//         const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//         const response =  await fetch(url)
//         return await response.json()
//     }
// }
// (async()=>{
//     const client = new APIClient()
//     const column = await client.getColumn('feweekly')
//     console.log(`NAME: ${column.name}`)
//     console.log(`INTRO: ${column.intro}`)
// })()
// ------------async错误处理---------------
// async function getZhiHuColumn(id){
//     const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
//     const response = await fetch(url)
//     // if(response.status !== 200){
//     //     throw new Error(response.statusText)
//     // }
//     return await response.json()
// }
// const showColumnInfo = async (id) => {
//     try{
//         const column = await getZhiHuColumn(id)
//         console.log(`TITLE: ${column.title}`)
//         console.log(`INTRO: ${column.intro}`)
//     }catch(error) {
//         console.log(error)
//     }
// }
// showColumnInfo('feweekly123')

//--------将串行的 await改为并行的 
async function getZhiHuColumn(id){
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`
    const response = await fetch(url)
    return await response.json()
}
const showColumnInfo = async()=>{
    const feweeklyPromise = await getZhiHuColumn('feweekly')
    const toolingtipsPromise = await getZhiHuColumn('toolingtips')
    const feweekly = await feweeklyPromise
    const toolingtips = await toolingtipsPromise
    console.log(`TITLE: ${feweekly.title}`)
    console.log(`INTRO: ${feweekly.intro}`)
}
showColumnInfo()