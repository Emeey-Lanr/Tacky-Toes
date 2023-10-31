// Remeber to create  a function that cut accross for error message
'use client'
import { createContext, useState } from "react"
import { appContextSchema } from "./ContextSchema"
import { changeDeleteModalState } from "@/Redux/Constituents/DeleteModalS"
import { changeErrorMessage } from "@/Redux/Constituents/Error"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/Redux/store"
import { changeProfileModalNumberR } from "@/Redux/Constituents/ProfileModal"
import { useRouter, useParams } from "next/navigation"
import axios from "axios"

// Create one function for deleteModal also
 export const appContext  = createContext(appContextSchema)
export const MainAppContext = ({ children }: { children: React.ReactNode }) => {
    const [loadingSkeleton, setLoading] = useState<boolean>(true)
    const endpoint:string = 'http://localhost:2034'
    const user_endpoint: string = `${endpoint}/user`
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const params = useParams()
    const [clicked, setClicked] = useState<boolean>(false)
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
    const getUserDetails = async() => {
        try {
            if (localStorage.txxxx) {
                setLoading(true)
                 const getDetails = await axios.get(`${user_endpoint}/getUser/${params.dashboard}`, {
                headers: {
                    "Authorization": `bearer ${localStorage.txxxx}`,
                    "Accept":"application/json",
                    "Content-Type": "application/json",
                    
                }
                 })
                setLoading(false)
                 console.log(getDetails)
            } else {
                router.push("/signin")
            }
           
        } catch (error) {
            router.push("/signin");
        }
    }
    return (
        <appContext.Provider
            value={{
                user_endpoint,
                clicked,
                setClicked,
                openExitDeleteModal,
                errorMessageF,
                openProfileModal,
                buttonNavigation,
                getUserDetails,
                loadingSkeleton,
        }}
        >
            {children}
     </appContext.Provider>
    )
}
