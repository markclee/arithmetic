import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd'
import store from './store/index.js'
// import { CHANGE_INPUT_VALUE, CHANGE_ITEM_VALUE, DELETE_ITEM_VALUE } from './store/actionTypes.js'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator.js'

class TodoList extends Component {
    constructor(props) {
        super(props)
        // 获取store中 默认的 state
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        // 订阅store, store中的数据只要改变, subscribe中的函数就会被执行 
        store.subscribe(this.handleStoreChange)
    }
    render() {
        // data的数据 调用renderItem这个函数渲染, 把数据渲染为 list.Item 这个组件
        return (
            <div style={{ marginTop: '10px', marginLeft: '10px' }}>
                <Input
                    value={this.state.inputValue}
                    placeholder='todo-info'
                    style={{ width: '300px' }}
                    onChange={this.handleInputChange}
                />
                <Button onClick={this.handleBtnClick} type='primary' style={{ marginLeft: '10px' }}>提交</Button>
                <List
                    style={{ marginTop: '20px', width: '300px' }}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
                    )}
                />
            </div>
        )
    }
    handleInputChange(e) {
        //创建一个action 用于告诉store 更改inputValue的值
        console.log('e', e.target)
        // const action = {
        //     // 通知store干什么事情
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }
    handleStoreChange() {
        // 调用store中的getState获取数据, 将数据设置给state
        this.setState(store.getState())
    }
    //点击提交的时候, 把数据存储到store里的list
    handleBtnClick() {
        // const action = {
        //     type: CHANGE_ITEM_VALUE
        // }
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_ITEM_VALUE,
        //     index //将下标的值 传给reducer
        // }
        const action = getDeleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList