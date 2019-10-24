// react 运行 入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css'
// App 是组件， 大写字母开头的都是组件
import TodoList from './TodoList';

//把App组件 挂载到public下index.html文件中，id为root的标签
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
