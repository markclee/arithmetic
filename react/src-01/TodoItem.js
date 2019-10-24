// 父组件通过通过属性的方式,向子组件传递参数
// 子组件通过props接受父组件传递过来的参数
import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete() {
        // 列表渲染多少项, 由父组件决定的, 点击时候,子组件需要告诉父组件删除哪些数据
        // 子组件向父组件通信, 子组件调用父组件传递过来的方法
        this.props.delete(this.props.index)
    }
    render(){
        return (
            <div onClick={this.handleDelete}>{this.props.text}-{this.props.content}</div>
        )
    }
    // 当一个组件从父组件 接受了 参数, 只要父组件的render 函数被重新执行了, 子组件的这个函数就被执行
    // 当一个组件从父组件 接受了 参数
    // 如果这个组件第一次存在于父组件中,不会被执行
    // 如果这个组件已经存在父组件中,才会执行
    componentWillReceiveProps() {
        console.log('child - componentWillReceiveProps')
    }
    // 当这个组件 即将从页面中剔除的时候 执行
    componentWillUnmount() {
        console.log('child - componentWillUnmount')
    }
}
// 对TodoItem这个组件, 进行属性校验
TodoItem.propTypes = {
    // isRequired 必须传递的值
    text: PropTypes.string.isRequired,
    // arrayOf 是一个数组, 内容可以是 number 或 string
    // content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
    // 是其中的一种类型
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    delete: PropTypes.func,
    index: PropTypes.number
}
// 对TodoItem这个组件, 设置默认值
TodoItem.defaultProps = {
    text: 'helloworld'
}
export default TodoItem