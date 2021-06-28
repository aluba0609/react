import React, { Component } from 'react'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAll=()=>{
        this.props.clearAllDone()
    }
    render() {
        const { todos } = this.props;
        const doneCount = todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        const total = todos.length
        return (
            <div>
                <input type="checkbox" checked={doneCount === total&&total!==0} onChange={this.handleCheckAll } />
                <span>
                    <span>已完成{doneCount}</span>/全部{total}
                </span>
                <button onClick={this.handleClearAll}>清除全部</button>
            </div>
        )
    }
}