import Component from "./component";
const React = {
    createElement,
    Component
}

function createElement(tag,attrs,...childrens){
    attrs = attrs || {}
    return{
        tag,
        attrs,
        childrens,
        key: attrs.keys || null
    }
}
export default React