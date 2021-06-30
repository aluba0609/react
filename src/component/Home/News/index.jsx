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
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((message)=>{
                            return(
                                // 向路由组件传递query参数
                                <li key={message.id}><Link to={`/home/news/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link> </li>
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
