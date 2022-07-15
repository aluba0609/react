import Component from "../react/component";
import { diff, diffNode } from "./diff";
const ReactDom={
    render
}

function render (vnode,container,dom){
    return diff(dom,vnode,container)
    // return container.appendChild(_render(vnode))
}

export function createComponent(comp,props){
    let inst;
    //如果是类定义的组件 则创建实例 返回
    if(comp.prototype && comp.prototype.render){
        inst= new comp(props)
    }else{
       //函数组件 构造类
       //如果是函数组件，讲函数组件扩展成类组件 方便统一管理
        inst=new Component(props)
        inst.constructor=comp 
        inst.render = function(){
            return this.constructor(props)
        }
    }

    return inst
}

export function renderComponent(comp){
    let base
    const renderer=comp.render() 

    if(comp.base && comp.componentWillUpdate){
        comp.componentWillUpdate()
    }
    
    base = diffNode(comp.base,renderer)
    if (comp.base) {
        if (comp.componentDidUpdate) comp.componentDidUpdate();
    } else if (comp.componentDidMount) {
        comp.componentDidMount();
    }
    
    comp.base= base
}

export function setComponentProps(comp,props){
    if(!comp.base){
        if(comp.componentWillMount) {
            comp.componentWillMount()
        }
    }else if( comp.componentWillReceveProps){
        comp.componentWillReceveProps(props)
    }
    //设置组件的属性
    comp.props=props
    //渲染组件
    renderComponent(comp)
}

//设置属性
export function setAttribute(dom,key,value){
    //讲属性名className转换成class
    if(key === 'className'){
        key = 'class'
    }

    //如果是事件onClick onBlur...
    if(/on\w+/.test(key)){
        //转小写
        key = key.toLowerCase()
        dom[key]=value ||''
    }else if(key === 'style'){
        if(!value || typeof value ==='string'){
            dom.style.cssTest = value || ''
        }else if(value &&typeof value === 'object'){
            for (const k in value) {
                if(typeof value[k] === 'number'){
                    dom.style[k] = value[k] + 'px'
                }else {
                    dom.style[k] = value[k]
                }
            }
        }
    }else{
        //其他属性
        if(key in dom){
            dom[key] = value ||''
        }
        if(value){
            //更新值
            dom.setAttribute(key,value)
        }else{
            dom.removeAttribute(key)
        }

    }
}
export default ReactDom;