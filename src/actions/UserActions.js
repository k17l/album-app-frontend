export const loadUserDetails = (userDetails) => {
    return {
        type : 'LOAD_USER_DETAILS',
        userDetails
    }
}

export const loadAlbumDetails = (albumDetails) => {
    return {
        type : 'LOAD_ALBUM_DETAILS',
        albumDetails
    }
}

export const loadPhotoDetails = (photoDetails) => {
    return {
        type : 'LOAD_PHOTO_DETAILS',
        photoDetails
    }
}