import React from "react"

export default class Clock extends React.Component {
    constructor(props) {
        super(props)
        console.log('Clock constructed')
        this.state = { Date : new Date()}
    }

    componentDidMount() {
        console.log('Clock DidMount')
        this.timeID = setInterval(()=>this.tick(), 1000)
    }
    componentWillUnmount() {
        console.log('Clock Will Unmount')
        clearInterval(this.timeID)
    }
    componentDidUpdate() {
        console.log('Clock did Update')
    }
    tick() {
        this.setState({
            data: new Date()
        })
    }
    render(){
        return (
            <div><h1>it is {this.state.data.toLocaleTimeString()}</h1></div>
        )
    }
}