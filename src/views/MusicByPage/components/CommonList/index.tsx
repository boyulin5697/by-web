import { Avatar, List } from 'antd';
import React from 'react';
import './index.css'

export interface ListData {
    title:string,
    content:string,
    pos?:number,
    current:boolean
}


export default function CommonList(props:any){
    const data:ListData[] = props.data
    const modifyCurrent = props.modifyCurrent
    return (
        <List
            size="large"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item
                    className={item.current?"current":"no-current"}
                >
                    <List.Item.Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title={<p onClick={modifyCurrent(item.pos)}>{item.title}</p>}
                        description={item.content}

                    />
                </List.Item>
            )}
        />
    )
}