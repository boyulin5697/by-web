import Home from './views/Home'
import NotFound from './component/404';
import 'antd/dist/antd.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchPage from './views/SearchPage';
import BlogCalenderPage from './views/BlogCalenderPage';
import LoginPage from './views/Login';
import RegisterPage from './views/Register';

/**
 * 路由组件
 * 
 * @author by.
 * @since 2022/8/10
 * 
 */

export default function ByRouter(props:any) {

  const { getComponentChange } = props;
 
  function announceComponentChange(name:string){
    getComponentChange(name)
  }

  return (
    <div className='byRouter'>
        <Routes>
          <Route path = "/" element = { <Home announceComponentChange = { announceComponentChange }/> } >
          </Route>
          <Route path ="/blogCalender" element={ <BlogCalenderPage announceComponentChange={ announceComponentChange }/> }/>
          <Route path='/login' element={<LoginPage announceComponentChange = { announceComponentChange }/> }/>
          <Route path = "/searchResult" element ={ <SearchPage announceComponentChange = { announceComponentChange }/>}/>
          <Route path = '/register' element={<RegisterPage announceComponentChange = { announceComponentChange }/>} />
          <Route path = "*" element = { <NotFound announceComponentChange = { announceComponentChange }/> }>
          </Route>
        </Routes>
    </div>
  )
}
    