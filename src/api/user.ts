import { ApiResults, ByPost, CommonResponse } from "./service";

/**
 * 用户服务端请求
 * 
 * @author by.
 * @since 2022/8/10
 * 
 */


/**
 * 登录请求体
 */
export interface LoginRequest{
    loginCredit:string,
    password:string
}

export interface RegisterRequest{
     nickName:string,
     password:string,
     email:string,
     gender:string,
     intro:string
}

export function login(request:LoginRequest):Promise<ApiResults>{
    return ByPost(request,"/user/login");
}

export function register(request:RegisterRequest):Promise<ApiResults>{
    return ByPost(request,"/user/register")
}

