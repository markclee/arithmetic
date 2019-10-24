import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            list: []
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }
    handleAddItem(){
        this.setState((prevState)=>{
            return {
                list: [...prevState.list, 'item']
            }
        })
        // <div className={this.state.show ? 'show':'hide'}>hello</div>
    }
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <CSSTransition
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el)=>{el.style.color='red'}}
                                    appear={true}
                                    key={index}
                                >
                                    <div key={index}>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggle</button>
            </Fragment>
        )
    }
}
export default App