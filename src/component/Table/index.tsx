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
 * @notice byTable 组件对传入的参数有显示定义：见'TableProperties'
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
    const data = props.props.data
    const columns = props.props.columns
    const pagination = props.props.pagination
    const { modifyPage } = props
    console.log("表格数据：",data)
    console.log("行数据：",columns)
    console.log("分页配置：",pagination)

    const handleTableChange = (newPagination: TablePaginationConfig) => {
        modifyPage(newPagination.current,newPagination.pageSize)
    }
    return (
        <Table columns={columns} dataSource={data} pagination={pagination} onChange={handleTableChange}/>
    )
}
