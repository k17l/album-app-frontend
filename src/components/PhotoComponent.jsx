import React, { Component } from 'react'
import { connect } from 'react-redux'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import '../css/PhotoComponent.css'

import AlbumDataService from '../api/AlbumDataService'
import { loadPhotoDetails } from '../actions/UserActions'




class PhotoComponent extends Component {

    componentDidMount() {
        console.log(this.props)
        console.log(this.props.match.params.id)
        AlbumDataService.retrievePhotosByAlbumId(this.props.match.params.id)
            .then(response => {
                this.props.loadPhotoDetails(response.data)
            })
    }

    render() {
        let { photoDetails } = this.props
        console.log(photoDetails)

        
        var images = [];


        photoDetails.map(function(item) {
            images.push({
                "original": item.url,
                "thumbnail" : item.thumbnailUrl,
                "originalTitle" : item.title,
                "thumbnailTitle  " : item.title
            });
        })

        return (
            <div className='container  fit-image'>
               <ImageGallery items={images} /> 
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        photoDetails: state.photoDetailsReducer.photoDetails
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        loadPhotoDetails: (photoDetails) => {
            dispatch(loadPhotoDetails(photoDetails))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(PhotoComponent)