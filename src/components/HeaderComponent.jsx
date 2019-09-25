import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import '../css/Header.css'

class HeaderComponent extends Component {
    render() {
        return (
            <div className='header'>
                <header>
                    <nav className="navbar navbar-expand-md">
                        <div><a href="http://kalaiselvan.me/" className="navbar-brand" target="_blank" rel="noopener noreferrer">kalaiselvan.me</a></div>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/users">All Users</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default withRouter(HeaderComponent)
