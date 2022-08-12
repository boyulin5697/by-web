import React,{ useState } from 'react'
import { Result, Button, Alert } from 'antd'
import { Link, useNavigate } from 'react-router-dom';

/**
 * 403组件
 * 
 * @author by.
 * @since 2022/8/12
 * 
 */

export default function Forbidden(props:any) {
    const navigate = useNavigate()
    const { announceComponentChange } = props;
    
    announceComponentChange("Forbidden");
  
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
      
      visiable?(<Alert message='您没有访问此页面的权限!'
      closable 
      afterClose={handleClose} 
      type="error"
      showIcon></Alert>):null
    
    }
    <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary"><Link to= "/">Back Home</Link></Button>}
  />
  </div>
  )
}
