import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detile from './Detile'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: "01", title: "消息params1" },
            { id: "02", title: "消息params2" },
            { id: "03", title: "消息params3" },
        ]
    }
    replaceShow = (id, title) => {
        //编写一段代码 实现Detail组件，实现replace +  params
        this.props.history.replace(`/home/message/detail/${id}/${title}`)
    }
    pushShow = (id, title) => {
        //编写一段代码 实现Detail组件，实现push   +  params
        this.props.history.push(`/home/message/detail/${id}/${title}`)
    }
    goback = () => {
        this.props.history.goBack()
    }
    forward = () => {
        this.props.history.goForward()
    }
    gogo=()=>{
        this.props.history.go(2)
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message) => {
                            return (
                                // 向路由组件传递params参数
                                <li key={message.id}>
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
                                    <button onClick={() => { this.pushShow(message.id, message.title) }}>push查看</button>&nbsp;
                                    <button onClick={() => { this.replaceShow(message.id, message.title) }}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <div>
                    <Route path="/home/message/detail/:id/:title" component={Detile} />
                </div>
                <div>
                    <button onClick={() => { this.goback() }}>后退</button>&nbsp;
                    <button onClick={() => { this.forward() }}>前进</button>&nbsp;
                    <button onClick={() => { this.gogo() }}>GO前进</button>
                </div>
            </div>
        )
    }
}
