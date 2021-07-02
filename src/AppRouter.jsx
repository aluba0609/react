import React, { Component } from 'react'
import { Switch, Route ,Redirect} from 'react-router-dom'
import MyHeader from './component/myHeader'
import About from './component/About'
import Home from './component/Home'
import MyNavLink from './component/MyNavLink'

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <div>
                    <MyHeader/>
                </div>
                <div>
                    <MyNavLink to='/about' title="about">about</MyNavLink>
                    <MyNavLink to='/home' title="home">home</MyNavLink>
                    {/* <NavLink activeClassName='aluba' to="/about">About</NavLink><br />
                    <NavLink activeClassName='aluba' to="/home">Home</NavLink> */}
                </div>
                <div>
                    <div>
                        <Switch>
                            <Route path='/about' component={About} />
                            <Route path='/home' component={Home} />
                            {/* <Route exact path='/home' component={Home} /严格模式 勿乱开启> */}
                            <Redirect to="/about"></Redirect>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
