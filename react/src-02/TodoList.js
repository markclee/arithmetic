// import React, { Component } from 'react';
import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'
import axios from 'axios'

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
  handleBtnClick() {
    // this.setState({
    //   list: [...this.state.list, this.state.inputVal],
    //   inputVal: []
    // })
    this.setState((prevState)=>({
      list: [...prevState.list, prevState.inputVal],
      inputVal: []
    }))
  }
  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value
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
        
        return <TodoItem delete={this.handleDelete} key={ index } content={ item } index={ index }/>
      })
    )
  }
  componentWillMount() {
    console.log('WillMount')
  }
  // 在组件挂在到页面上 ,只执行一次
  // 在这个钩子中发送ajax请求
  componentDidMount() {
    axios.get('/api/todolist')
    .then((res)=>{
      this.setState(()=>({
        list: [...res.data]
      }))
    })
    .catch(()=>{
      alert('error')
    })
  }
  render() {
    console.log('render')
    return (
      <Fragment>
       <input value={this.state.inputVal} onChange={this.handleInputChange}></input>
       <button className='red-btn' onClick={this.handleBtnClick}>add</button>
       <ul ref={(ul)=>{this.ul = ul}}>
        {
          this.handleRender()
        }
       </ul>
      </Fragment>
    )
  }
}

export default TodoList;