// reducer 相当于笔记本 
// state存放的是,整个仓库中的数据, 默认是一个空对象

import { CHANGE_INPUT_VALUE, CHANGE_ITEM_VALUE, DELETE_ITEM_VALUE } from './actionTypes.js'
// store中默认存储的数据
const defaultState = {
    inputValue: '123',
    list: ['哈哈哈','呵呵呵','啥啥啥']
}
// reducer 可以接收state 但是不能修改state 必须深拷贝后处理
export default (state = defaultState, action)=>{
    // reducer拿到之前数据, 当前要做的事
    console.log('action', action)
    if(action.type === CHANGE_INPUT_VALUE){
        // reducer接受state, 不能直接改变, 对象需要深拷贝一份, 然后在修改
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === CHANGE_ITEM_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        console.log('newState', newState)
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM_VALUE) {
        // 可以接收state, 但不能直接修改state
        const newState = JSON.parse(JSON.stringify(state))
        // reducer state接收下标 根据下标 删除list中的数据
        console.log('action', action)
        console.log('newstate', newState)
        newState.list.splice(action.index, 1)
        newState.inputValue = ''
        return newState
    }
    return state
}