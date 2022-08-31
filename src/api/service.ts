
import request from 'umi-request'

/**
 * umi request封装
 * 
 * @author by.
 * @since 2022/8/15
 */


export interface CommonResponse<T = any>{
    code:number,
    message:string,
    data?:T,
    time:string
}

export interface ApiResults<T = any>{
    resp: CommonResponse<T>;
}

/**
 * Rewrite post method
 * @param data 
 * @param url 
 */
const api = '/api'
export const ByPost = (data:any,url:string) => {
    const promise: Promise<ApiResults> = new Promise((resolve) => {
        request.post(
            api+url,
            {
                data:data,
                errorHandler: (error) => {
                    console.error(error)
                    return error
                },
            }
        ).then((resp: CommonResponse) => {
            resolve({
                resp,
            })
        }).catch((error:Error) => {
            resolve({resp:{code:500,message:error.message,time:''}});
        });
    })
    return promise;
}

/**
 * Rewrite Get operations
 * @param params 
 * @param url 
 * @returns 
 */
export const ByGet = (params:any,url:string) => {
    
    const promise: Promise<ApiResults> = new Promise((resolve) => {
        request.get(
            api+url,
            {
                params:params===undefined?undefined:params,
                errorHandler: (error) => {
                    console.error(error)
                    return error
                },
            }
        ).then((resp: CommonResponse) => {
            resolve({
                resp,
            })
        }).catch((error:Error) => {
            resolve({resp:{code:500,message:error.message,time:''}});
        });
    })
    return promise;
}