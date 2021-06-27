import React, { Component } from 'react'
import ReactDOM from 'react-dom';
// import hello from './index.module.css'
export default class Hello extends Component {
    //字符串形式ref
    // state = {
    //     data: {
    //         btn: '点我提示左侧的数据',
    //         placeholderLeft: '点我提示数据',
    //         placeholderRight: '失去焦点提示数据'
    //     }
    // }
    // render() {
    //     return (
    //         <div>
    //             <div className="hello.helloClass">
    //                 hello
    //             </div>
    //             <input ref='input1' type="text" placeholder={this.state.data.placeholderLeft} />
    //             <button onClick={this.btn}>{this.state.data.btn}</button>
    //             <input type="text" onFocus={this.btn} placeholder={this.state.data.placeholderRight} />
    //         </div>

    //     )
    // }
    //回调函数形式ref 
    // render() {
    //     return (
    //         <div>
    //             <div className="hello.helloClass">
    //                 hello
    //             </div>
    //             <input ref={(current) => { console.log(this.input1 = current) }} type="text" placeholder={this.state.data.placeholderLeft} />
    //             <button onClick={this.btn}>{this.state.data.btn}</button>
    //         </div>
    //     )
    // }

    //React.createRef()//调用后可以返回一个容器 该容器可以存储被ref所表示的节点
    // myRef = React.createRef()//调用后可以返回一个容器 该容器可以存储被ref所表示的节点
    // render() {//createRef形式ref 
    //     return (
    //         <div>
    //             <div className="hello.helloClass">
    //                 hello
    //             </div>
    //             <input ref={this.myRef} type="text" placeholder={this.state.data.placeholderLeft} />
    //             {/* <input ref={this.myRef} type="text" placeholder={this.state.data.placeholderLeft} /> */}

    //             <button onClick={this.btn}>{this.state.data.btn}</button>
    //         </div>
    //     )
    // }
    // btn = () => {
    //     console.log(this.myRef.current.value)
    // }

    // handSubmit=(e)=>{
    //     e.preventDefault()
    //     const {username,passwork}=this
    //     alert(`'账号'${username.value},'密码:',${passwork.value}`)
    // }
    // render(){
    //     return (
    //         <form action="http://www.atguigu.com" onSubmit={this.handSubmit}>
    //             用户名：<input ref={c=>this.username=c} type="text" name='username'/>
    //             密码：<input  ref={c=>this.passwork=c} type="passwork" name='passwork'/>
    //             <button>登录</button>
    //         </form>
    //     )
    // }



    // state={
    //     username:"",
    //     passwork:"",
    // }
    // handSubmit=(e)=>{
    //     e.preventDefault()
    //     const {username,passwork}=this.state
    //     alert(`'账号'${username},'密码:',${passwork}`)
    // }
    // saveUserName=(e)=>{
    //     this.setState({username:e.target.value})
    // }
    // savePassWork=(e)=>{
    //     this.setState({passwork:e.target.value})
    // }
    // render(){
    //     return (
    //         <form action="http://www.atguigu.com" onSubmit={this.handSubmit}>
    //             用户名：<input onChange={this.saveUserName} type="text" name='username'/>
    //             密码：<input  onChange={this.savePassWork} type="passwork" name='passwork'/>
    //             <button>登录</button>
    //         </form>
    //     )
    // }


    //高阶函数柯里化
    // state = {
    //     username: "",
    //     passwork: "",
    //     a:"aaa"
    // }
    // handSubmit = (e) => {
    //     e.preventDefault()
    //     const { username, passwork } = this.state
    //     alert(`'账号'${username},'密码:',${passwork}`)
    // }
    // save = (type) => {
    //     return (event) => {
    //             this.setState({ [type]: event.target.value })
    //     }

    // }
    // render() {
    //     return (
    //         <form action="http://www.atguigu.com" onSubmit={this.handSubmit}>
    //             用户名：<input onChange={this.save('username')} type="text" name='username' />
    //             密码：<input onChange={this.save('passwork')} type="passwork" name='passwork' />
    //             <button>登录</button>
    //         </form>
    //     )
    // }




    // state = {
    //     username: "",
    //     passwork: "",
    //     a: "aaa"
    // }
    // handSubmit = (e) => {
    //     e.preventDefault()
    //     const { username, passwork } = this.state
    //     alert(`'账号'${username},'密码:',${passwork}`)
    // }
    // save = (type, event) => {
    //     this.setState({ [type]: event.target.value })
    // }
    // render() {
    //     return (
    //         <form action="http://www.atguigu.com" onSubmit={this.handSubmit}>
    //             用户名：<input onChange={(event) => { this.save('username', event) }} type="text" name='username' />
    //             密码：<input onChange={(event) => { this.save('passwork', event) }} type="passwork" name='passwork' />
    //             <button>登录</button>
    //         </form>
    //     )
    // }



    death=()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('death'))
    }
    componentDidMount(){
        console.log(document.getElementById('death'))
        ReactDOM.unmountComponentAtNode(document.getElementById('death'))
    }
    render(){
        return(
            <div>
                <div id='death'>学不会React</div>
                <button onClick={ this.death}>不活了</button>
            </div>
        )
    }


}