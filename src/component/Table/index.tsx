import React from "react"
import { Table } from 'antd';
import type { ColumnsType, TablePaginationConfig} from 'antd/es/table';
import 'antd/dist/antd.css'

/**
 * 表格组件
 * 
 * @author by.
 * @since 2022/8/11
 * 
 * 
 * @notice byTable 组件对传入的参数有显式定义：见'TableProperties'
 * 传入的tableProperties变量名为tableContent
 * 同时，modifyPage()方法必须在每一个父组件内进行定义。
 * 
 */


/**
 * 表格传入属性
 * @param data 表格数据
 * @param columns 表格头
 * @param pagination 分页配置
 */
export interface TableProperties<T>{
    data?:T[],
    columns?: ColumnsType<T>,
    pagination?: TablePaginationConfig,
}

export default function ByTable(props:any) {
    const { tableContent,modifyPage } = props
    const data = tableContent.data;
    const columns = tableContent.columns;
    const pagination = tableContent.pagination;
    console.log("表格数据：",data)
    console.log("行数据：",columns)
    console.log("分页配置：",pagination)

    /**
     * 当分页属性发生变化时，勾回调用者
     * @param newPagination 
     */
    const handleTableChange = (newPagination: TablePaginationConfig) => {
        modifyPage(newPagination.current,newPagination.pageSize)
    }
    return (
        <Table columns={columns} dataSource={data} pagination={pagination} onChange={handleTableChange}/>
    )
}
