import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import Detile from './Detile'

export default class State extends Component {
    state = {
        messageArr: [
            { id:"01", title: "新闻state1" },
            { id:"02", title: "新闻state2" },
            { id:"03", title: "新闻state3" },
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
                                // 向路由组件传递state参数
                                <li key={message.id}><Link to={{pathname:"/home/state/detail",state:{id:message.id,title:message.title}}}>{message.title}</Link> </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <div>
                    <Route path="/home/state/detail" component={Detile} />
                </div>
            </div>
        )
    }
}
