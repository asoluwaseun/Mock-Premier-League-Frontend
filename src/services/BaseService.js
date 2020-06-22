import axios from 'axios';
import qs from 'query-string';
import store from '../store';

axios.defaults.baseURL = "https://p-league.nw.r.appspot.com/api/v1";

const getToken = ()=> {
    let auth = store.state.user_details.authorization;

    axios.defaults.headers.common['authorization'] = "Bearer " + auth;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*";
    axios.defaults.headers.common['Content-Type'] = "application/x-www-form-urlencoded";
}

export default class BaseService{
    static get(url,data = {}){
        getToken()
        return axios.get(url, qs.stringify(data));
    }

    static post(url, data = {}){
        getToken()
        return axios.post(url, data);
    }

    static put(url, data = {}){
        getToken()
        return axios.put(url, data);
    }

    static delete(url, data = {}){
        getToken()
        return axios.delete(url, data);
    }

    static upload(method = "post",url,data = {}){
        getToken();
        axios.defaults.headers.common['Content-Type'] = "multipart/form-data";
        return axios[method](url, data);
    }
}