import { List,Space,Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { PaginationConfig } from 'antd/es/pagination'
import React from 'react'

/**
 * List组件
 * 
 * @author by.
 * @since 2022/8/12
 * 
 */


/**
 * 博客预览对象
 * @param avator 用户头像地址
 * @param title 博客标题
 * @param description 描述
 * @param photo 描述图片
 * @param href 访问地址
 * 
 */
export interface blogPreview{
  blogId:string,
  avatar:string,
  title:string,
  href:string,
  description:string,
  photo?:string
}

/**
 * 列表属性入参对象
 * @param data 数据入参
 * @param pagniation 分页属性参数
 */
export interface listProperties{
    data:blogPreview[],
    pagination:PaginationConfig
}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  

export default function ByList(props:any) {
  const { listContents } = props
  const { data, pagination } = listContents
  return (
    <List
     itemLayout='vertical'
     size='large'
     pagination = {pagination}
     dataSource={data}
     renderItem={(item:any) => (
       <List.Item 
        actions={[
            <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />,
          ]} 
          extra={
            <img
              width={'200px'}
              alt="logo"
              src={item.photo===undefined?"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png":item.photo}
            />  
          }
        >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          //bug
          //先调整，以后写死
          title={<Link to = "/blogDetail" state={{id:item.blogId}}>{item.title}</Link>}
          description={item.description}
        />
        {item.content}  
        </List.Item>
     )}
    />
  )
}
