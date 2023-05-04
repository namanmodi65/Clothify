import React,{createContext, useContext, useReducer} from 'react'

const CardStateContext = createContext()
const CardDispatchContext = createContext()

const reducer =(state,action)=>{
    switch (action.type) {
        case "ADD":
        return[
            ...state,{id:action.id,name:action.name,price:action.price,qyt:action.qyt}
        ]
        case "DROP":
            let emptyArr = []
            return emptyArr
        default:
            console.log('Reducer error')
            
    }
}

export const CardProvider = ({children})=>{
    const [state,dispatch] = useReducer(reducer,[])
    return(
        <CardDispatchContext.Provider value={dispatch}>
            <CardStateContext.Provider value={state}>
                {children}
            </CardStateContext.Provider>
        </CardDispatchContext.Provider>
    )
}


export const useCard=()=>useContext(CardStateContext)
export const useCardDispatch=()=>useContext(CardDispatchContext)