import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.delete(this.props.index)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content){
            return true
        }else {
            return false
        }
    }
    render(){
        console.log('child render')
        return (
            <div onClick={this.handleDelete}>{this.props.content}</div>
        )
    }
}
TodoItem.propTypes = {
    // text: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    delete: PropTypes.func,
    index: PropTypes.number
}
export default TodoItem