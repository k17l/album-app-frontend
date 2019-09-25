import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadUserDetails } from '../actions/UserActions'
import AlbumDataService from '../api/AlbumDataService'

class UserDetailsComponent extends Component {

    componentDidMount() {
        AlbumDataService.retrieveAllUsers()
            .then(response => {
                this.props.loadUserDetails(response.data)
            })
    }

    render() {
        let { userDetails } = this.props
        console.log(this.props)

        let userDetailsList = userDetails.map((userDetail) => {
            return (
                    <tr key={userDetail.id}>
                        <th scope="row">{userDetail.id}</th>
                        <td>{userDetail.name}</td>
                        <td>{userDetail.username}</td>
                        <td>{userDetail.email}</td>
                        <td>{userDetail.phone}</td>
                        <td>{userDetail.website}</td>
                        <td>{userDetail.address.street}</td>
                        <td>{userDetail.address.suite}</td>
                        <td>{userDetail.address.city}</td>
                        <td>{userDetail.address.zipcode}</td>
                    </tr>
            )
        })

        return (
            <div className='container'>
                <table className='table table-bordered'>
                    <thead className='thead-light'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Username</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Website</th>
                            <th scope='col'>Street</th>
                            <th scope='col'>Suite</th>
                            <th scope='col'>City</th>
                            <th scope='col'>Zipcode</th>
                        </tr>
                    </thead>

                    <tbody>
                        {userDetailsList}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        userDetails: state.userDetailsReducer.userDetails
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadUserDetails: (userDetails) => {
            dispatch(loadUserDetails(userDetails))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UserDetailsComponent)