import { Avatar, List } from 'antd';
import React from 'react';

export interface ListData {
    title:string,
    content:string
}


export default function CommonList(props:any){
    const data:ListData[] = props.data
    return (
        <List
            size="large"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={item.title}
                        description={item.content}

                    />
                </List.Item>
            )}
        />
    )
}