import { enqueueSetState } from "./set_state_queue";

export default class Component{
    constructor(props={}){
        this.props = props
        this.state={}
    }
    setState(stateChange){
        enqueueSetState(stateChange,this)
    }
}