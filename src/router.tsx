import Home from './views/Home'
import NotFound from './component/404';
import 'antd/dist/antd.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SearchPage from './views/SearchPage';

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
          <Route path = "/searchResult" element ={ <SearchPage announceComponentChange = { announceComponentChange }/>}/>
          <Route path = "*" element = { <NotFound announceComponentChange = { announceComponentChange }/> }>
          </Route>
        </Routes>
    </div>
  )
}
    