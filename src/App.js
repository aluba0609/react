//创建外壳组件APP
import React,{Component} from "react";
import Hello from './component/hello'
//创建并暴露组件
export default class App extends Component {
  render(){
    return(
      <div>
        <Hello/>
      </div>
    )
  }
}

