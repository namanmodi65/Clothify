import { createContext,useReducer,useEffect } from "react"
import Reducer from "./Reducer"

const INITIAL_STATE ={
    user: JSON.parse(localStorage.getItem("user")) || null,
    userType:null,
    isFetching:false,
    error:false
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,INITIAL_STATE)
    useEffect(() => {
      localStorage.setItem("user",JSON.stringify(state.user))
    }, [state.user])
    
    return(
        <Context.Provider value={{
            user:state.user,
            userType:state.userType,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
        {children}
        </Context.Provider>
    )
}
