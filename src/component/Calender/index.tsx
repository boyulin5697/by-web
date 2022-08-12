import React from 'react'
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import moment from 'moment';

/**
 * 日历组件
 * 
 * @author by.
 * @since 2022/8/11
 * 
 */

export default function ByCalender(props:any) {
    const { time,setCurrentDestTime } = props;

    function giveTime(value:Moment){
      setCurrentDestTime(value.format('YYYY-MM-DD'))
    }
  
    const value = moment()
    console.log(value)
    giveTime(value)
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
      //TODO:执行搜索，获取列表，并回调给上层
    const onSelect = (value:Moment) => {
        giveTime(value)
    };
  return (
    <Calendar onPanelChange={onPanelChange}
      onSelect={onSelect}
      defaultValue={time}
    />
  )
}
