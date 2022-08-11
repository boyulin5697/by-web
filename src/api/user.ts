import { postAction, } from "./service";

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
export interface LoginCredit{
    name:string,
    password:string
}

export interface RegisterCredit{
    name:string,
    email:string,
    password:string,
}

export function login(request:LoginCredit){
    return postAction("/api/login",request);
}

export function register(request:RegisterCredit){
    return postAction("/api/register",request)
}

