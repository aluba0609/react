import React, { Component } from 'react'
import MyNavLink from '../MyNavLink'
import { Route, Switch ,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'
import State from './State'

export default class Home extends Component {
    render() {
        // console.log(this.props)
        return (
            <div style={{ textAlign: "center", margin: "0 auto" }}>
                <h3>
                    我是Home
                </h3>
                <div>
                    <ul style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                        <li>
                            <MyNavLink to='/home/news'>News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/message'>Message</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to='/home/state'>State</MyNavLink>
                        </li>
                    </ul>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/message' component={Message}/>
                        <Route path='/home/state' component={State}/>
                        <Redirect to='/home/news'/>
                    </Switch>
                </div>
            </div>
        )
    }
}
