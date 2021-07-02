//该文件专门为Count组件生成action对象
import {INCREMENT,DECREMENT} from './count'
export const createIncrementAction= data=>({type:INCREMENT,data})
export const createDecrementAction=data=>({type:DECREMENT,data})
//异步action 就是指action的值的为函数 异步action中一般都会调用同步action
export const createIncrementAsyncAction =(data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}
