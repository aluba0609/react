/*
 1.该文件是用于创建一个Count组件服务的reduce，reducer的本质就是一个函数
 2.reducer会接受两个参数 分别为之前的状态(preState) 动作对象action
*/
const initState = 0
export default function countReducer(preState = initState, action) {
    // if(preState === undefined) preState=0
    //从action对象中 获取type data
    const { type, data } = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default:
            return preState
    }
}