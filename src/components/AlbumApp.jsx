import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'
import UserDropDownComponent from './UserDropDownComponent'
import AlbumComponent from './AlbumComponent'
import PhotoComponent from './PhotoComponent'
import UserDetailsComponent from './UserDetailsComponent'
import ErrorComponent from './ErrorComponent'

class AlbumApp extends Component {
    render() {
        return (
            <div className='album-app'>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        <Route path="/" exact component={UserDropDownComponent} />
                        <Route path="/users" component={UserDetailsComponent} />
                        <Route path="/albums/:id" component={AlbumComponent} />
                        <Route path="/photos/:id" component={PhotoComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                <FooterComponent />
            </div>
        )
    }
}

export default AlbumApp
