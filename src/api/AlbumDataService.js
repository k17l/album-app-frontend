import axios from 'axios'
import { API_URL } from '../constants/AppConstants'

class AlbumDataService {

    retrieveAllUsers(){
        return axios.get(`${API_URL}/users`)
    }

    retrieveAlbumsByUserId(id){
        return axios.get(`${API_URL}/albums?userId=${id}`)
    }

    retrievePhotosByAlbumId(id){
        return axios.get(`${API_URL}/photos?albumId=${id}`)
    }
}

export default new AlbumDataService()