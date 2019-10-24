// import React, { Component } from 'react';
import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'

// 定义一个React组件
class TodoList extends Component {
  constructor(props) {
    super(props)
    // 当组件的state或者props发生改变时, render函数就会重新执行
    this.state = {
      list: [
      ],
      inputVal: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // 改变state中的数据,需要调用setState方法
  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputVal],
    //   inputVal: []
    // })
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputVal],
      inputVal: []
    }), ()=>{
      console.log(this.ul.querySelectorAll('div').length)
    })
  }
  handleInputChange() {
    // console.log(e.target.value)
    // this.setState({
    //   inputVal: e.target.value
    // })
    //使用ref方式获取
    this.setState({
      inputVal: this.input.value
    })
  }
  handleLiClick(index) {
    // 操作state中的数据,尽量复制一个副本出来,然后操作副本
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   list: [...list]
    // })
  }
  // 向子组件传递一个 handleDelete方法
  handleDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: [...list]
    })
  }
  handleRender() {
    return (
      this.state.list.map((item, index)=>{
        // return <li key={index} onClick={this.handleLiClick.bind(this, index)}>{item}</li>
        // 父组件 通过属性的形式 向子组件传递参数
        // key不会传递给子组件, content index会传递给子组件
        return <TodoItem delete={this.handleDelete} key={ index } content={ item } index={ index }/>
      })
    )
  }
  // 在组件即将被挂在到页面的时刻自动执行
  componentWillMount() {
    console.log('WillMount')
  }
  render() {
    console.log('render')
    // return 出去的内容，就是要显示的内容
    return (
      // jsx语法, 支持js表达式，不支持js语法
      // this指向, 当前组件
      <Fragment>
       <input ref={(input)=>{this.input = input}} value={this.state.inputVal} onChange={this.handleInputChange}></input>
       <button className='red-btn' onClick={this.handleBtnClick}>add</button>
       <ul ref={(ul)=>{this.ul = ul}}>
        {
          this.handleRender()
        }
       </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    console.log('DidMount')
  }
  // 在组件更新之前 会被自动执行
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  // 组件更新之前执行, 在shouldComponent返回true的情况之后执行
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  // 在页面渲染之后执行
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  
}

export default TodoList;