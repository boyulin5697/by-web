import React,{ useState } from 'react'
import { useLocation } from 'react-router';
import 'antd/dist/antd.css'
import ByTable, { TableProperties } from '../../component/Table';
import { TablePaginationConfig } from 'antd';
import { searchForBlog } from '../../api/blog';

/**
 * 搜索结果页
 * 
 * 
 * @author by.
 * @since 2022/8/11
 */

export interface SearchResult{
    title:string;
    author: string,
    abstract:string,
    time:string
}

//搜索值应该在跳转时从props中同步导入
export default function SearchPage(props:any) {
    const state:any = useLocation().state
    console.log(state)
    const [ data, setData ] = useState();
    const [ searchString ] = useState<string>(state) 
    //渲染查询结果
    //总页数配置,此值在请求api时应该自主计算
    //本页搜索分页配置
    const [pagination, setPageination] = useState<TablePaginationConfig>({
        current:1,
        pageSize:10
    });
    let total = 0
    async function getBlogData(){
        const resp = (await (searchForBlog({ searchString:searchString, pageNum:pagination.current,pageSize:pagination.pageSize}))).resp
        if(resp.code === 200){
            const content =resp.data
            if(data===undefined){
                setData(content.content)
            }
            total = content.totalPages
        }
    }
    getBlogData()

    //修改页面配置或切换页面
    function modifyPage(current:number,pageSize:number){
        setPageination({
            current: current,
            pageSize: pageSize
        })
    }
    //定义本页的表格组件
    const tableContent: TableProperties<SearchResult> = {
        data:data,
        columns:[
            {
                title:'Title',
                dataIndex:'title',
                sorter:true,
                width:'15%'
            },
            {
                title:'Author',
                dataIndex:'author',
                width:'15%'
            },
            {
                title:'Abstract',
                dataIndex:'description',
                width:'40%'
            },
            {
                title:'Create Time',
                dataIndex:'createdDate',
                width:'30%'
            }
        ],
        pagination: {
            pageSize:pagination.pageSize,
            current:pagination.current,
            total:total
        }
    }
    return (
        <div className='searchResult'>
            <ByTable tableContent={tableContent} modifyPage = {modifyPage}/>
        </div>
    )
}
