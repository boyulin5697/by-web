import { Button, Result } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 404 组件
 * 
 * @author by.
 * @since 2022/8/9
 * 
 */
export default function NotFoundPage(props:any) {

  const { announceComponentChange } = props;
  
  announceComponentChange("Not Found");
  
  return (
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
  )
}
