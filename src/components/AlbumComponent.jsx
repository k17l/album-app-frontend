import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import AlbumDataService from '../api/AlbumDataService'
import { loadAlbumDetails } from '../actions/UserActions'

class AlbumComponent extends Component {

    componentDidMount() {
        AlbumDataService.retrieveAlbumsByUserId(this.props.match.params.id)
            .then(response => {
                this.props.loadAlbumDetails(response.data)
            })
    }

    handleAlbumClick = (album) => {
        console.log("kalai", album)
        this.props.history.push(`/photos/${album.id}`)
    }

    render() {
        let { albumDetails } = this.props
        console.log(albumDetails)

        const albumsList = albumDetails.map(album => {
            return (
                <Link className="list-group-item list-group-item-action" key={album.id} data-toggle="list" onClick={() => this.handleAlbumClick(album)} role="tab" to=''>{album.id} - {album.title}</Link>
            )
        })
        return (
            <div className='container'>
                <div className="list-group" role="tablist">
                    <h4 className="center"> Album Id & Title </h4>
                    { albumsList }
                </div>
            </div>
        )
    }
}


const mapStatetoProps = (state) => {
    return {
        albumDetails: state.albumDetailsReducer.albumDetails
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadAlbumDetails: (albumDetails) => {
            dispatch(loadAlbumDetails(albumDetails))
        }
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(AlbumComponent))