import { Header } from "antd/lib/layout/layout";
import { Menu,Avatar,Input } from "antd";
import { Link , useNavigate} from "react-router-dom";
import 'antd/dist/antd.css'

/**
 * 页面头组件
 * 
 * @author by.
 * @since 2022/8/9
 */

const { Search } = Input

export default function ByHeader() {

  const navigate = useNavigate();
  const onSearch = (value:string) => {
    console.log(value)
    navigate("/searchResult")
  };
  return (
    <Header style={{ position: 'fixed', zIndex: 9999, width: '100%'}}>
    <div className="logo">
      <Avatar style={{ marginBottom:'150px'}} size='large' src='logo.png'></Avatar>
    </div>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}>
          <Menu.Item key="Home">
            <Link to="/">首页</Link>
          </Menu.Item>
          <Menu.Item key="Blog">
            博客
          </Menu.Item>
          <Menu.Item key="Search">
            <Link to= "/searchResult">搜索</Link>
          </Menu.Item>
          <Menu.Item>
          <div className="searchBox" style={{marginLeft:'30px'}}>
            <Search
              placeholder="请输入搜索内容"
              allowClear
              enterButton="Search"
              size="middle"
              onSearch={onSearch}
              style={{marginTop:'5%'}}
            />
          </div>
          </Menu.Item>
    </Menu>
  </Header>
  )
}

