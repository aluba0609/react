import React, { Component } from 'react'
import { withRouter } from 'react-router'

class myHeader extends Component {
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
        return (
            <div>
                <div style={{ margin: "0 auto", textAlign: 'center' }}>
                    路由
                </div>
                <div style={{ margin: "0 auto", textAlign: 'center' }}>
                    <button onClick={() => { this.goback() }}>后退</button>&nbsp;
                    <button onClick={() => { this.forward() }}>前进</button>&nbsp;
                    <button onClick={() => { this.gogo() }}>GO前进</button>
                </div>
            </div>
        )
    }
}
//暴露withRouter加工后的组件  专门解决飞路由组件 不含history的方法
export default withRouter(myHeader)
