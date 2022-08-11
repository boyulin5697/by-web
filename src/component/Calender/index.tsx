import React from 'react'
import { Calendar } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';

/**
 * 日历组件
 * 
 * @author by.
 * @since 2022/8/11
 * 
 */
export default function ByCalender() {
    const onPanelChange = (value: Moment, mode: CalendarMode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      };
  return (
    <Calendar onPanelChange={onPanelChange} />
  )
}
