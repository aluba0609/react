
import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        mouse: false
    }
    handleMpuse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }
    handleCheck=(id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    render() {
        const { id,name, done ,handleDelete} = this.props
        const {mouse}=this.state
        return (
            <li style={{ backgroundColor: mouse ? "#ddd" : 'white' }} onMouseEnter={this.handleMpuse(true)} onMouseLeave={this.handleMpuse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>{handleDelete(id)}} style={{ display: mouse?"block":"none" }}>删除</button>
            </li>
        )
    }
}