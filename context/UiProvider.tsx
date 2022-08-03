import { FC, useReducer } from 'react'
import { UiContext } from './ContextUi';
import { uiReducer } from './UiReducer';

export interface UIState{
   modal:string,
   search:string,
}
interface Props{
    children: JSX.Element
}
const INITIAL_STATE:UIState={
    modal:'display-none',
    search:'animate__fadeInLeft',
}


export const UiProvider:FC<Props> = ({children}) => {
   const [state, dispatch] = useReducer(uiReducer, INITIAL_STATE);


    const toggleSidebar=(value:string)=>{
    dispatch({type:'toggleModal', payload:value})
   } 
   
    const toggleSearch=(value:string)=>{
    dispatch({type:'toggleSearch', payload:value})
   } 



  return (
    <UiContext.Provider value={{      // must be import the context
        ...state,
        toggleSidebar,
        toggleSearch,

    }}>
    {children}
    </UiContext.Provider>
)
}