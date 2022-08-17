import { ActionConsts } from "./const";

/**
 * Actions
 * 
 * @author by.
 * @since 2022/8/17
 */

export const ModifyComponentAction = (name:string) => ({ 
    type:ActionConsts.MODIFY_COMPONENT,
    componentName:name
});