import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Card } from 'antd';
import { getBlogDetail } from '../../api/blog';
import type { Moment } from 'moment';

/**
 * 博客具体信息页
 * 
 * @author by.
 * @since 2022/8/12
 * 
 */

export interface blogData {
  title:string,
  description:string,
  blogContent:string,
  createdDate:Moment
  //comment先不写进来
}

export default function BlogDetailPage(props:any) {
  const stateParams = useLocation()
  let states = stateParams.state as any
  console.log(states)
  async function fetchData() {
    const resp = (await (getBlogDetail(states.id))).resp
    if(resp.code!==200){
      window.alert("查询博客失败！")
      setTimeout(()=> {
        window.history.back()
      },3000)
    }
    else{
      setData(resp.data)
      console.log(resp.data)
    }
  }
  const [ data,setData ] = useState<blogData>();
  fetchData()
  return (
    <div className='blog-detail-page'>
      <h2>{data?.title}</h2>
      <p>{data?.createdDate.toString()}</p>
      <Card title="Default size card" style={{ width: 300 }}>
      {data?.description}
      </Card>
      <Card title="Default size card" style={{ width: 300 }}>
      {data?.blogContent}
      </Card>
    </div>
  )
}
