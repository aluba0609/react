import React, { Component } from 'react'
const data = [
    { id:"01", content: "你好，中国广东" },
    { id:"02", content: "你好，中国香港" },
    { id:"03", content: "你好，中国台湾" },
]
export default class Detile extends Component {
    render() {
        const {id,title}=this.props.match.params;
        const findResult=data.find((obj)=>{
            return obj.id===id
        })
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
