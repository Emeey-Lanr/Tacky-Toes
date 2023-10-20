// Remeber to create  a function that cut accross for error message
'use client'
import { createContext } from "react"
import { appContextSchema } from "./ContextSchema"
import { changeDeleteModalState } from "@/Redux/Constituents/DeleteModalS"
import { changeErrorMessage } from "@/Redux/Constituents/Error"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/Redux/store"
import { changeProfileModalNumberR } from "@/Redux/Constituents/ProfileModal"
import { useRouter } from "next/navigation"
// Create one function for deleteModal also
 export const appContext  = createContext(appContextSchema)
export const MainAppContext = ({children}:{children:React.ReactNode}) => {
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const errorMessageF = (errorMessage:string) => {
        dispatch(changeErrorMessage(errorMessage))
    }
    const openExitDeleteModal = (modal_state:boolean, modal_message:string, modal_text:string, phaseUsage:number ) => {
       dispatch(changeDeleteModalState({modal_state, modal_message, modal_text, phaseUsage }))
    }  
    const openProfileModal = (modalNumber: number) => {
        dispatch(changeProfileModalNumberR(modalNumber))
    }
    
    const buttonNavigation = (routeToPushTo:string) => {
        router.push(`/${routeToPushTo}`)
    }
    return (
        <appContext.Provider
            value={{
                openExitDeleteModal,
                errorMessageF,
                openProfileModal,
                buttonNavigation
        }}
        >
            {children}
     </appContext.Provider>
    )
}
