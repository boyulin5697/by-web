import React,{ useState } from 'react'
import ByCalender from '../../component/Calender'
import ByList, { listProperties } from '../../component/List';
import moment from 'moment'
/**
 * 博客日历呈现页
 * 
 * @author by.
 * @sicne 2022/8/12
 */

const mockData = Array.from({length:200}).map((_,i) => (
  {
    href: 'https://ant.design',
    title: `ant design part 1`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  }));


const listContents:listProperties = {
  data:mockData,
  pagination:{
  position:'bottom'
  }
}


export default function BlogCalenderPage(props:any) {
  const [ now ] = useState<string>(moment().format('YYYY-MM-DD'))
  const [ time, setTime ] = useState<string>();
  function setCurrentDestTime(newTime:string,kickToday:boolean){
    if(newTime!==now||kickToday===true){
      setTime(newTime);
    }
    console.log("set state time:"+time)
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
