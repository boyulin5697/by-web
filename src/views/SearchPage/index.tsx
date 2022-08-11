import React,{ useState } from 'react'
import 'antd/dist/antd.css'
import ByTable, { TableProperties } from '../../component/Table';
import { TablePaginationConfig } from 'antd';

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
//mock data
const mockData = [
    {
        title:"hey",
        author:"by.",
        abstract:"First blog",
        time:"2022-8-11"
    },
    {
        title:"hey1",
        author:"by.",
        abstract:"Second blog",
        time:"2022-8-11"
    }

]

const mockData2 = [
    {
        title:"hey2",
        author:"by.",
        abstract:"First blog",
        time:"2022-8-11"
    },
    {
        title:"hey3",
        author:"by.",
        abstract:"Second blog",
        time:"2022-8-11"
    }

]

//搜索值应该在跳转时从props中同步导入
export default function SearchPage(props:any) {
    //总页数配置,此值在请求api时应该自主计算
    const [ total, setTotal] = useState<number>(30);
    //本页搜索分页配置
    const [pagination, setPageination] = useState<TablePaginationConfig>({
        current:1,
        pageSize:10,
        total:total
    });
    //渲染查询结果
    const [data, setData] = useState<SearchResult[]>(mockData)

    //修改页面配置或切换页面
    function modifyPage(current:number,pageSize:number){
        setPageination({
            current: current,
            pageSize: pageSize,
            total:total//这个是mock数据，应该在做查询请求时获取并配置
        })
        switch(current){
            case 1: setData(mockData)
                break;
            case 2: setData(mockData2)
                break;
            default: break;        
        }
        //在api定义之后，这里应该要放入下一页的api 
        //setData(query(current,pageSize))
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
                dataIndex:'abstract',
                width:'40%'
            },
            {
                title:'Create Time',
                dataIndex:'time',
                width:'30%'
            }
        ],
        pagination:pagination
    }
    const { announceComponentChange } = props;
    announceComponentChange("Search Results");
    return (
        <div className='searchResult'>
            <ByTable props={tableContent} modifyPage = {modifyPage}/>
        </div>
    )
}
