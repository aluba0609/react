import { renderComponent } from "../react-dom";

/**
 * 1.异步更新state 短时间内吧多个setState合并成一个（队列 先进先出）
 * 2.一段时间后 循环清空队列  渲染组件
 */
const setStateQueue=[]
const renderQueue = [];
function defer (fn){
    return Promise.resolve().then(fn)
}
export function enqueueSetState(stateChange,component){
    if(setStateQueue.length === 0){
        defer(flush)
    }
    //1.短时间内合并多个setState
    setStateQueue.push({
        stateChange,
        component
    })
    //如果renderQUEUE里面没有组件，添加到队列中
    let r =renderQueue.some(item=>{
        return item === component
    })
    if(!r){
        renderQueue.push(component)
    }
}


//一段时间之后
function flush(){
    let item,component;
    while (item = setStateQueue.shift()) {
        const {stateChange,component}=item
        //保存之前的状态
        if(!component.prevState){
            component.prevState = Object.assign({},component.state)
        }
        if(typeof stateChange === 'function'){
            //是一个函数
            Object.assign(component.state,stateChange(component.prevState,component.props))
        }else{
            Object.assign(component.state,stateChange)
        }
        component.prevState = component.state
    }


    while (component = renderQueue.shift()) {
        renderComponent(component)
    }
}