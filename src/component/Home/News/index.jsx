import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import Detile from './Detile'

export default class News extends Component {
    state = {
        messageArr: [
            { id:"01", title: "新闻query1" },
            { id:"02", title: "新闻query2" },
            { id:"03", title: "新闻query3" },
        ]
    }
    replaceShow=(id,title)=>{
        //编写一段代码 实现Detail组件，实现replace +  query
        this.props.history.replace(`/home/message/detail?${id}&title=${title}`)
    }
    pushShow=(id,title)=>{
        //编写一段代码 实现Detail组件，实现push   +  query
        this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message)=>{
                            return(
                                // 向路由组件传递query参数
                                <li key={message.id}>
                                    <Link to={`/home/news/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>
                                    <button onClick={()=>{this.pushShow(message.id,message.title)}}>push查看</button>&nbsp;
                                    <button onClick={()=>{this.replaceShow(message.id,message.title)}}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <div>
                    <Route path="/home/news/detail" component={Detile} />
                </div>
            </div>
        )
    }
}
