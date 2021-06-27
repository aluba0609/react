import React, { Component } from 'react'
// import ReactDOM from 'react-dom';
// import hello from './index.module.css'
class HelloSon extends Component{
    constructor(props){
        super(props)
    }
    UNSAFE_componentWillReceiveProps(){
        console.log("HelloSon组件收到props")
    }
    UNSAFE_componentWill (){
        console.log("HelloSon组件componentWillMount")
    }
    UNSAFE_componentWillUpdate(){
        console.log("HelloSon组件componentWillUpdate")
    }
    componentDidMount(){
        console.log("HelloSon组件componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("HelloSon组件shouldComponentUpdate")
        return true//控制下面的渲染和钩子函数的执行
    }
    componentDidUpdate(){
        console.log("HelloSon组件componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("HelloSon组件componentWillUnmount")
    }
    render(){
        return(
            <div>
                <div>HelloSon</div>
                <div>{this.props.carName}</div>
            </div>
        )
    }
}
export default class Hello extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            carName:"奔驰"
        }
    }

    death=()=>{
        // const {count}=this.state
        // this.setState({count:count+1})
        this.setState({carName:"奇瑞QQ"})
        // this.forceUpdate()//强制更新  跳过shouldComponentUpdate的判断
    }
    UNSAFE_componentWillMount(){
        console.log("Hello组件componentWillMount")
    }
    componentDidMount(){// 常用 一般用来 发送请求 订阅消息
        console.log("Hello组件componentDidMount")
    }

    shouldComponentUpdate(){
        console.log("Hello组件shouldComponentUpdate")
        return true//控制下面的渲染和钩子函数的执行
    }
    UNSAFE_componentWillUpdate(){
        console.log("Hello组件componentWillUpdate")
    }
    componentDidUpdate(){
        console.log("Hello组件componentDidUpdate")
    }

    componentWillUnmount(){//常用 取消订阅
        console.log("Hello组件componentWillUnmount")
    }
    render(){
        const {count}=this.state
        return(
            <div>
                <HelloSon carName={this.state.carName} ></HelloSon>
                <div id='death'>{count}</div>
                <button onClick={ this.death}>不活了</button>
            </div>
        )
    }


}