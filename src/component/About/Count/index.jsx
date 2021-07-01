import React, { Component } from 'react'
import store from '../../../redux/store'

export default class Count extends Component {
    state = {
        carName: '奔驰c63'
    }
    // componentDidMount(){
    //     //检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    increment = () => {
        const { value } = this.selectNumber
        store.dispatch({type:"increment" , data:value*1})
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch({type:"decrement" , data:value*1})
    }
    incrementfOdd = () => {
        const { value } = this.selectNumber
        const count  = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({type:"increment" , data:value*1})
        }
    }
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({type:"increment" , data:value*1})
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}
