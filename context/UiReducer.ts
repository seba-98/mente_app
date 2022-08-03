
interface IinitialState{
    modal:string,
    search:string,
}

const initialState:IinitialState={
    modal:'display-none',
    search:'display-none',
}

type uiActions=
| {type:'openModal'}
| {type:'closeModal'}
| {type:'toggleModal', payload:string}
| {type:'openSearch'}
| {type:'closeSearch'}
| {type:'toggleSearch', payload:string}

export const uiReducer=(state=initialState, action:uiActions)=>{

    switch (action.type) {
        case 'toggleModal':
        return {...state, modal:action.payload}
        
        case 'toggleSearch':
            return {...state, search:action.payload}

        default:
             return state
    }
}