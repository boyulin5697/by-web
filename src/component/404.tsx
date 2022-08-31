import { Alert, Button, Result } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/**
 * 404 组件
 * 
 * @author by.
 * @since 2022/8/9
 * 
 */
export default function NotFoundPage(props:any) {
  const navigate = useNavigate()
 
  //顶部提示可见性
  const[visiable,setVisiable] = useState<boolean>(true)

  const handleClose = () => {
    setVisiable(false);
  }
  //导航
  function finalThen(){
    navigate("/")
  }
  //5s后回送主页
  setTimeout(finalThen,5000);
  return (
    <div>
      {
      
        visiable?(<Alert message='本页面不存在!'
        closable 
        afterClose={handleClose} 
        type="error"
        showIcon></Alert>):null
      
      }
    <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={
      <Button type="primary">
        <Link to= "/">Back Home</Link>
      </Button>
    }
    />
    </div>
    
  
  )
}
