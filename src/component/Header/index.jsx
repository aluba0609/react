import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Header extends Component {
    static propTypes = {
        addTodo: propTypes.func.isRequired
    }
    handleKeyup = (event) => {
        const { target, keyCode } = event
        if (keyCode !== 13) return
        if (target.value.trim() === '') {
            alert("不能为空")
            return
        }
        const todoobj = { id: Math.random().toString().slice(2, 9), name: target.value, done: false }
        this.props.addTodo(todoobj)
        target.value = ''
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleKeyup} type="text" placeholder='请输入你的任务名称，按回车键确认' />
            </div>
        )
    }
}