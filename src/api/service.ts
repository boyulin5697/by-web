import axios from "axios";

/**
 * axios封装
 * 
 * @author by.
 * @since 2022/8/10
 *  
 */

const AxiosService = axios.create({
    timeout:30000
});

AxiosService.interceptors.request.use(
    (config) => {
        //TODO Some more action
    },
    (err) => {
        return Promise.reject(err);
    }
)

AxiosService.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        return Promise.reject(err);
    }
)

/**
 * post 请求封装
 * @param url 
 * @param data 
 * @returns 
 */
export function postAction(url:string, data:any){
    return AxiosService({
        url:url,
        method:'post',
        data:data
    })
} 

export function getAction(url:string, params:any){
    return AxiosService({
        url:url,
        method:'get',
        params:params
    })
}

export default AxiosService;
 