import React, { Component } from 'react'
import { Link ,Route} from 'react-router-dom'
import Detile from './Detile'

export default class Message extends Component {
    state = {
        messageArr: [
            { id:"01", title: "消息params1" },
            { id:"02", title: "消息params2" },
            { id:"03", title: "消息params3" },
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
                                // 向路由组件传递params参数
                                <li key={message.id}><Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link> </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <div>
                    <Route path="/home/message/detail/:id/:title" component={Detile} />
                </div>
            </div>
        )
    }
}
