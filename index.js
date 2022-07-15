import React from "./react";
import ReactDom from "./react-dom";


const ele=(
    <div className='active' title='123'>
        hello,<span>react111</span>
    </div>
)
const Homes =()=>{
    return(
        <div className='active' title='123'>
        hell00001,<span>react00001</span>
    </div>
    )
}
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }
    componentWillMount(){
        console.log('组件将要加载');
    }
    componentWillReceveProps(props){
        console.log(props,'props');
    }
    componentWillUpdate(){
        console.log('组件将要更新');
    }
    componentDidMount(){
        console.log('组件加载完成');
        // for (let index = 0; index < 100; index++) {
        //     this.setState((prevState,prevProps)=>{
        //         console.log(prevState.num)
        //         return{
        //             num:this.state.num +1
        //         }
        //     })
        // }
    }
    componentDidUpdate(){
        console.log('组件更新完成');
    }
    handle(){
        this.setState({
            num:this.state.num+1
        })
    }
    render(){
        return(
            <div className='active' title='123'>
                hello,<span>{this.state.num}</span>
                <button onClick={this.handle.bind(this)}>点击</button>
                <Homes></Homes>
            </div>
        )
    }
}
// ReactDom.render(ele,document.querySelector('#root'))
ReactDom.render(<Home name={'active'}/>,document.querySelector('#root'))