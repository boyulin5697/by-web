import Home from './views/Home'
import NotFound from './component/404';
import 'antd/dist/antd.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchPage from './views/SearchPage';
import BlogCalenderPage from './views/BlogCalenderPage';
import LoginPage from './views/Login';
import RegisterPage from './views/Register';
import { ModifyComponentAction } from './store/actions'

/**
 * 路由组件
 * 
 * @author by.
 * @since 2022/8/10
 * 
 */

export default function ByRouter(props:any) {

  //const { dispatch  } = props;

  //console.log(props)
 
  // function announceComponentChange(name:string){
  //   //getComponentChange(name)
  //  //console.log(name)
  //   dispatch(name)
  // }

  return (
    <div className='byRouter'>
        <Routes>
          <Route path = "/" element = { <Home/> } >
          </Route>
          <Route path ="/blogCalender" element={ <BlogCalenderPage/> }/>
          <Route path='/login' element={<LoginPage/> }/>
          <Route path = "/searchResult" element ={ <SearchPage/>}/>
          <Route path = '/register' element={<RegisterPage/>} />
          <Route path = "*" element = { <NotFound/> }>
          </Route>
        </Routes>
    </div>
  )
}
