import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import ByFooter from './component/Footer';
import ByHeader from './component/Header';
import { BackTop,Breadcrumb, Layout, Spin } from 'antd';
import ByRouter from './router';

const { Content } = Layout;

function App() {
  const [ componentName, setComponentName ] = useState("Home")
 

  function getComponentChange(name:string){
    setComponentName(name);
    console.log("组件经路由变化为 => "+name)
  }

  return (
    <Layout className="layout">
    <BackTop />
    <ByHeader/>
    <Content
      style={{
        padding: '0 50px', marginTop: 64
      }} 
    >
      <Breadcrumb
        style={{
          margin: '16px 15px',
        }}
      >
        <Breadcrumb.Item>{ componentName }</Breadcrumb.Item>
      </Breadcrumb>
        <div className="site-layout-content">
          <ByRouter getComponentChange = {getComponentChange}/>
        </div>
    </Content>
    <ByFooter/>
  </Layout>
  )
}



export default App;
