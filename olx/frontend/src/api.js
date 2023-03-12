

// http://127.0.0.1:8000/api/ads/

const baseURL = 'http://127.0.0.1:8000/api'

export const API = {
    ads:{
        list: 'http://127.0.0.1:8000/api/ads/',
        //list: '${baseURL}/ads/',
        create: '${baseURL}/create-ad/',
        retrieve: id => '${baseURL}/ads/${id}/',
        update: id => '${baseURL}/ads/${id}/update/',
        delete: id => '${baseURL}/ads/${id}/delete/',
    }
}