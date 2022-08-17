import { ActionConsts } from "./const"

/**
 * 博客内容状态
 * 
 * @author by.
 * @since 2022/8/17
 * 
 */
export interface blogCalenderState {
    data:any//先这样
}

const initialState = {
    data:undefined
}

const blogCalenderRender = (state = initialState,action:any) => {
    switch(action.type){
        case ActionConsts.CHANGE_CALENDER_DATA:
            return {  data: action.data }
        default:
            return state
        
        }
}

export default blogCalenderRender;