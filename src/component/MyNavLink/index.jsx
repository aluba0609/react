import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                <NavLink activeClassName='aluba' {...this.props} />
                {/* <NavLink activeClassName='aluba' {...this.props}>{this.props.children}</NavLink><br /> */}
            </div>
        )
    }
}
