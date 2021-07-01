import React, { Component } from 'react'
import Count from './Count'

export default class About extends Component {
    render() {
        return (
            <div style={{textAlign:"center",margin:"0 auto"}}>
                <div>
                    我是About
                </div>
                <div>
                    <Count/>
                </div>
            </div>
        )
    }
}
