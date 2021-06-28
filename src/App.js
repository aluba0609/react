//创建外壳组件APP
import React, { Component } from "react";
import Footer from './component/Footer'
import Header from './component/Header'
import List from './component/List'
//创建并暴露组件
export default class App extends Component {
  state = {
    todos: [
      { id: '001', name: '吃饭', done: true },
      { id: '002', name: '睡觉', done: true },
      { id: '003', name: '打代码', done: false },
      { id: '004', name: '逛街', done: false },
    ]
  }
  addTodo = (todoObj) => {
    const { todos } = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }
  updateTodo = (id, done) => {
    console.log(id, done)
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done }
      else return todo
    })
    this.setState({ todos: newTodos })
  }
  handleDelete = (id) => {
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })
    this.setState({ todos: newTodos })
  }
  checkAllTodo = (done) => {
    const { todos } = this.state
    const newTodos = todos.map((todo) => {
      return { ...todo, done: done }
    })
    this.setState({ todos: newTodos })
  }
  clearAllDone = () => {debugger
    const { todos } = this.state
    const newTodos = todos.filter((todo) => {
      return todo.done ===false
    })
    this.setState({ todos: newTodos })
  }
  render() {
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} addTodo={this.addTodo} handleDelete={this.handleDelete} updateTodo={this.updateTodo} />
        <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone} />
      </div>
    )
  }
}
//66
