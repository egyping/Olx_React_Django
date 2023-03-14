

// http://127.0.0.1:8000/api/ads/

export const BASE_URL = 'http://127.0.0.1:8000/api';

export const API = {
    ads:{
        list: 'http://127.0.0.1:8000/api/ads/',
        //list: '${baseURL}/ads/',
        create: '${baseURL}/create-ad/',
        retrieve: id => '${baseURL}/ads/${id}/',
        //retrieve: id => 'http://127.0.0.1:8000/api/ads/1/',
        //retrieve: id => 'http://127.0.0.1:8000/api/ads/${id}/',
        update: id => '${baseURL}/ads/${id}/update/',
        delete: id => '${baseURL}/ads/${id}/delete/',
    }
}