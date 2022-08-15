import request from 'umi-request'

export interface CommonResponse{
    code:number,
    message:string,
    data:any,
    time:string
}

/**
 * Rewrite post method
 * @param data 
 * @param url 
 */
export function ByPost<T = any>(data:T,url:string):any{
    request.post('/api'+url,
    {
        data:data

    }).then((resp) => {
        console.log(resp)
        const resData:CommonResponse = {
            code:resp.data.code,
            message:resp.data.message,
            data:resp.data.data,
            time:resp.data.time
        }
        return resData
    })
    .catch((error) => {
        console.log(error)
        const errorData:CommonResponse = {
            code:500, 
            message:'出现错误',
            data:error, 
            time:error.time
        }
        return errorData
    })

}