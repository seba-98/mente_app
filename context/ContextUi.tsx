import { createContext } from 'react';

interface ContextProps{
    modal:string;
    search:string;
    toggleSidebar:(value:string)=>void,
    toggleSearch:(value:string)=>void,
    
}

export const UiContext= createContext({}  as ContextProps);