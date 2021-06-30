import React, { Component } from 'react'
const data = [
    { id:"01", content: "你好，中国广东State" },
    { id:"02", content: "你好，中国香港State" },
    { id:"03", content: "你好，中国台湾State" },
]
export default class Detile extends Component {
    render() {
        const {id,title}=this.props.location.state||{};//urlencoded编码符
        const findResult=data.find((obj)=>{
            return obj.id===id
        })||{}
        return (
            <div>
                <ul>
                    <li>{`ID:${id}`}</li>
                    <li>{`TITLE:${title}`}</li>
                    <li>{`content:${findResult.content}`}</li>
                </ul>
            </div>
        )
    }
}
