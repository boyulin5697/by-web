export interface defaultState {
    componentName:string
};

const initialState = {
    componentName:'Home'
}

const AppStateRender = (state = initialState, action:any) => {
    switch(action.type){
        case "MODIFY_COMPONENT":
            console.log('@')
            return { componentName: action.componentName }
        default:
            console.log('@d')
            return state;    
    }
}

export default AppStateRender;