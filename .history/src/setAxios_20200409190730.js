import axios from 'axios'
import store from './store/index'
axios.defaults.baseURL = 'http://120.24.80.45:3000/';

export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(
        config=>{
            if(store.state.token){
                config.headers['Authorization']= `Bearer ${store.state.token}`
            }
            return config
        }
    )
}