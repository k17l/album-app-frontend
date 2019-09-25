import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadUserDetails} from '../actions/UserActions'
import AlbumDataService from '../api/AlbumDataService'

class UserDropDownComponent extends Component {

    componentDidMount() {
        AlbumDataService.retrieveAllUsers()
            .then(response => {
                this.props.loadUserDetails(response.data)
            })
    }

    onUserChange = (event) => {
        let id = event.target.value
        this.props.history.push(`/albums/${id}`)
    }

    render() {
        const { userDetails }= this.props

        const userNameList = userDetails.map((userDetail) => {
            return (
                <option key={userDetail.id} value={userDetail.id}>{userDetail.name}</option>
            )
        })
        
        return (
            <div className='container'>
                <div className='user-drop-down container w-25 p-3'>
                    <h4>Select a User</h4>
                    <select className='custom-select' onChange = {this.onUserChange} >
                        { userNameList }
                    </select>
                </div>
                <div className="jumbotron">
                    <h1 className="display-4">Photo Album App</h1>
                    <p className="lead">This is a simple photo album application. Users can able to see all the user details, albums associated with a particular user and all the photos in the selected album</p>
                    <hr className="my-4" />
                    <p>Please select the user from above dropdown to vie the albums associated with them</p>
                    <Link className="btn btn-primary btn-lg" to="/users" role="button">View All Users</Link>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        userDetails : state.userDetailsReducer.userDetails
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadUserDetails: (userDetails) => {
            dispatch(loadUserDetails(userDetails))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UserDropDownComponent)