import React, { Component } from 'react'
import propTypes from 'prop-types'
import Item from '../Item/index'
export default class List extends Component {
    static propTypes={
        todos:propTypes.array.isRequired,
        updateTodo:propTypes.func.isRequired,
        handleDelete:propTypes.func.isRequired
    }
    render(){
    const {todos,updateTodo,handleDelete}=this.props
    return(
            <ul>
                {
                    todos.map((todo)=>{
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} handleDelete={handleDelete}/>
                    })
                }
            </ul>
        )
    }


}