import { Header } from "antd/lib/layout/layout";
import { Menu,Avatar } from "antd";
import { Link } from "react-router-dom";
import 'antd/dist/antd.css'

/**
 * 页面头组件
 * 
 * @author by.
 * @since 2022/8/9
 */

export default function ByHeader() {
  return (
    <Header style={{ position: 'fixed', zIndex: 9999, width: '100%'}}>
    <div className="logo">
      <Avatar style={{}} size='large' src='logo.png'></Avatar>
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}>
          <Menu.Item key="Home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="Blog">
            博客
          </Menu.Item>
          <Menu.Item key="Search">
            <Link to= "/searchResult">搜索</Link>
          </Menu.Item>
    </Menu>
  </Header>
  )
}

