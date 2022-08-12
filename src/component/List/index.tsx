import { List,Space } from 'antd'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { PaginationConfig } from 'antd/es/pagination'
import React from 'react'
import Item from 'antd/lib/list/Item';

/**
 * List组件
 * @TODO 未完待续，懒得写了
 * @author by.
 * @since 2022/8/12
 * 
 */


/**
 * 列表属性入参对象
 * @param data 数据入参
 * @param pagniation 分页属性参数
 */
export interface listProperties<T>{
    data:T[],
    pagination:PaginationConfig
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  

export default function ByList(props:any) {
  const { listContents,modifyPage } = props
  const { data, pagination } = listContents
  return (
    <List
     itemLayout='vertical'
     size='large'
     pagination = {pagination}
     dataSource={data}
     renderItem={item => (
       <List.Item 
        actions={[
            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
          ]} 
        />
     )}
    />
  )
}
