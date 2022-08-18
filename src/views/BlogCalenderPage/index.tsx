import React,{ useState } from 'react'
import ByCalender from '../../component/Calender'
import ByList, { listProperties, blogPreview } from '../../component/List';
import moment from 'moment'
import type { Moment } from 'moment'
import { queryBlogByDate } from '../../api/blog';
/**
 * 博客日历呈现页
 * 
 * @author by.
 * @sicne 2022/8/12
 */

export default function BlogCalenderPage(props:any) {
  const [ now ] = useState<string>(moment().format('yyyy-MM-dd'))
  const [ time, setTime ] = useState<Moment>();
  const [ data, setData ] = useState<blogPreview[]>();
  function setCurrentDestTime(newTime:Moment,kickToday:boolean){
    if(moment(newTime).format('yyyy-MM-dd')!==now||kickToday===true){
      setTime(newTime);
      getBlogByDate(newTime)
      console.log(newTime)
    }
    console.log("set state time:"+time?.toString)
  }

  async function getBlogByDate(time:Moment){
      console.log(time)
      const resp = (await queryBlogByDate({date:time})).resp
      console.log(resp)
      if(resp.code===200){
          setData(resp.data)
      }else{
        //do nothing
        console.log(resp)
      }
  }

  const listContents = {
    data:data,
    pagination:{
    position:'bottom'
    }
  }
  

  return (
    <div className='BlogCalenderPage'>
      <div className='Calender' style={{backgroundColor:'lightblue'}}>
        <ByCalender setCurrentDestTime = { setCurrentDestTime } time = {time}/>
      </div>
      <br/>
      <div className='BlogList'>
        <ByList listContents={listContents}/>
      </div>
    </div>
  )
}
