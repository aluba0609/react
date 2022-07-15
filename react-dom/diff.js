import { setAttribute ,setComponentProps,createComponent} from "./index";
export function diff(dom,vnode,container){
    console.log(dom,'dom');
    const ret = diffNode(dom,vnode)

    if(container){
        container.appendChild(ret)
    }
    return ret
}

export function diffNode(dom,vnode){
    let out = dom
    if(vnode === undefined || vnode===null || typeof vnode ==='boolean') return;
    if(typeof vnode === 'number') vnode =String(vnode)
    //如果vnode是字符串 直接渲染
    if(typeof vnode === 'string'){
        if(dom && dom.nodeType === 3){
            if(dom.textContent !== vnode){
                dom.textContent= vnode
            }
        }else{
            out = document.createTextNode(vnode)
            if(dom && dom.parentNode){
                dom.parentNode.replaceNode(out,dom)
            }
        }
        return out
    }
    if(typeof vnode.tag === 'function'){
        return diffComponent(dom,vnode)
    }
    //非文本DOM节点
    if(!dom){
        out = document.createElement(vnode.tag)
    }
    if(vnode.childrens && vnode.childrens.length >0 || (out.childNodes && out.childNodes.length > 0 )){
        //对比组件 或者子节点
        diffChildren(out,vnode.childrens)
    }
    diffAttribute(out,vnode)
    return out
}
function diffComponent(dom,vnode){
    //如果组件没有变化，更新设置props
    let comp =  dom
    if(comp && comp.constructor === vnode.tag){
        setComponentProps(comp,vnode.attrs)
        dom = comp.base
    }else{
        //组件类型发生变化
        if(comp){
            //先移除旧组件
            unmountComponent(comp)
            comp=null
        }
        //1.创建新组建
        comp = createComponent(vnode.tag,vnode.attrs)
        setComponentProps(comp,comp.attrs)
        dom= comp.base
        //2.设置组件属性
        //3.给当前组件挂载base
    }
    return dom
}
function unmountComponent(comp){
    removeNode(comp.base)
}
function removeNode(dom){
    if(dom && dom.parentNode){
        dom.parentNode.removeNode(dom)
    }
}
function diffChildren(dom,vchildren){
    const domChildren = dom.childNodes
    const children = []
    const keyed = {}
    //将有key的节点（用对象保存）和没有key的节点（用数组保存）分开
    if(domChildren.length > 0){
        [...domChildren].forEach(item=>{
            const key = item.key;
            if(key){
                //如果key存在，保存在对象中
                keyed[key]=item
            }else{
                children.push(item)
            }
        })
    }
    if(vchildren &&vchildren.length > 0){
        let min = 0
        let childrenLen=children.length;
        [...vchildren].forEach((vchild,i)=>{
            const key =vchild.key
            let child
            if(key){
                if(keyed[key]){
                    child = keyed[key]
                    keyed[key]=undefined
                }
            }else if(childrenLen > min){
                //如果没有key 则优先找类型相同的节点
                for (let j = min; j < childrenLen; j++) {
                    let c = children[j];
                    if(c){
                        child = c
                        children[j]=undefined
                        if(j === childrenLen -1) childrenLen--
                        if(j === min) min++
                        break
                    }
                    
                }
            }
            //对比
            child = diffNode(child,vchild)
            //更新DOM
            const f = domChildren[i]
            if(child && child !== dom && child !==f){
                //如果更新前的对应位置为空，说明此节点是新增
                if(!f){
                    dom.appendChild(child)
                }else if(child === f.nextSibling){
                    removeNode(f)
                    //将更新后的节点移动到正确位置
                }else{
                    dom.insertBefore(child,f)
                }
            }
        })
    }
}
function diffAttribute(dom,vnode){
    const oldAttrs={}
    const newAttrs=vnode.attrs
    const domAttrs=dom.attributes;
    [...domAttrs].forEach(item=>{
        oldAttrs[item.name] = item.value
    })
    //比较
    //如果原本属性跟新的属性对比，不在新的属性中，则将其移除掉（属性值为undefined）
    for (const key in oldAttrs) {
        if(!(key in newAttrs)){
            setAttribute(dom , key ,undefined)
        }
    }

    for (const key in newAttrs) {
        if( oldAttrs[key] !== newAttrs[key]){
            setAttribute(dom,key,newAttrs[key])
        }
    }
}