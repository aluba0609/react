import React, { Component } from 'react'
import qs from  'querystring'
const data = [
    { id:"01", content: "你好，中国广东消息" },
    { id:"02", content: "你好，中国香港消息" },
    { id:"03", content: "你好，中国台湾消息" },
]
export default class Detile extends Component {
    render() {
        const {search}=this.props.location;//urlencoded编码符
        const result=qs.parse(search.slice(1))
        const findResult=data.find((obj)=>{
            return obj.id===result.id
        })
        return (
            <div>
                <ul>
                    <li>{`ID:${result.id}`}</li>
                    <li>{`TITLE:${result.title}`}</li>
                    <li>{`content:${findResult.content}`}</li>
                </ul>
            </div>
        )
    }
}
