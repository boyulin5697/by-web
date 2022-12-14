import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { useSelector } from 'react-redux'
import ByFooter from './component/Footer';
import ByHeader from './component/Header';
import { BackTop,Breadcrumb, Layout } from 'antd';
import ByRouter from './router'

const { Content } = Layout;



function App() {
  const { componentName } = useSelector((store:any) => store.app)
  
  //const [ componentName, setComponentName ] = useState<string>("Home")
 

  //function getComponentChange(name:string){
    //setComponentName(name);
    //console.log("组件经路由变化为 => "+name)
  //}

  console.log(componentName)
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
          <ByRouter/>
        </div>
    </Content>
    <ByFooter/>
  </Layout>
  )
}



export default App;
