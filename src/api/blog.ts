import { ByPost,ByGet, ApiResults } from "./service";
import type { Moment } from 'moment';




/**
 * blog类请求封装
 * 
 * @author by.
 * @since 2022/8/16
 * 
 */

const api = '/blog';

export interface QueryBlogByDateRequest{
    date:Moment
}

export interface SearchBlogRequest{
    searchString:string,
    pageNum?:number,
    pageSize?:number
}


export function queryBlogByDate(request:QueryBlogByDateRequest):Promise<ApiResults>{
    return ByPost(request,api+"/queryBlogByDate")
}

export function searchForBlog(request:SearchBlogRequest):Promise<ApiResults>{
    return ByPost(request,api+'/searchForBlog')
}

