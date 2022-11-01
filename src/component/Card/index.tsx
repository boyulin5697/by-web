import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import React from 'react';

const { Meta } = Card;


/**
 * 展示卡片组件
 *
 * @author by.
 */
export default function ByCard(props:any){

    const { src, title, description, onClick } = props

    return(
        <Card
            style={{width: "300px", height:"auto"}}
            cover={
            <img alt="example"
                 src={src!=undefined?src:"https://source.unsplash.com/random"}/>
            }
            onClick={onClick}
            hoverable={true}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" size={"small"}/>}
                title={title!=undefined?title:"Card title"}
                description={description!=undefined?description:"This is the description"}
            />
        </Card>
    )
}