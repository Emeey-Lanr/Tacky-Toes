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
import { collectGameDetailsR } from "@/Redux/Constituents/Game"
import { collectUserDetailsR } from "@/Redux/Constituents/User"
import { useSocket } from "@/socket"
import { notificationOnloadR } from "@/Redux/Constituents/Notification"

// Create one function for deleteModal also
 export const appContext  = createContext(appContextSchema)
export const MainAppContext = ({ children }: { children: React.ReactNode }) => {
  const {socket} = useSocket()
    const [loadingSkeleton, setLoading] = useState<boolean>(true)
    const endpoint: string = `${process.env.NEXT_PUBLIC_APP_ENDPOINT}`;
    const user_endpoint: string = `${endpoint}/user`
  const game_endpoint: string = `${endpoint}/game`
  const play_game_endpoint:string = `${endpoint}/play/game`
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    const params = useParams()
    const [clicked, setClicked] = useState<boolean>(false)
      const [errorSucessBackground, setErrorSuccessBackground] = useState<string>("");
    const errorMessageF = (errorMessage:string) => {
        dispatch(changeErrorMessage(errorMessage))
    }
    const openExitDeleteModal = (
      modal_state: boolean,
      modal_message: string,
      modal_text: string,
      phaseUsage: number,
      componentName: string,
      data: any
    ) => {
      dispatch(
        changeDeleteModalState({
          modal_state,
          modal_message,
          modal_text,
          phaseUsage,
          componentName,
          data,
        })
      );
    };  
    const openProfileModal = (modalNumber: number) => {
        dispatch(changeProfileModalNumberR(modalNumber))
    }
    
    const buttonNavigation = (routeToPushTo:string) => {
        router.push(`/${routeToPushTo}`)
  }
   const responseF = (message: string, color: string) => {
     dispatch(changeErrorMessage(`${message}`));
     setErrorSuccessBackground(color);
   };
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
             
             
                 dispatch(collectUserDetailsR(getDetails.data.info.userInfo));
              dispatch(collectGameDetailsR(getDetails.data.info.allGamesCreatedInfo))
              dispatch(
                notificationOnloadR(getDetails.data.info.userNotification)
              );
              console.log(getDetails.data.info.userInfo.username);
               socket?.emit("joinSocketApp", {
                username: getDetails.data.info.userInfo.username,
              });
               
         
            } else {
                router.push("/signin")
            }
           
        } catch (error:any) {
      
            router.push("/signin");
        }
    }
    return (
      <appContext.Provider
        value={{
          user_endpoint,
          game_endpoint,
          play_game_endpoint,
          clicked,
          setClicked,
          openExitDeleteModal,
          errorMessageF,
          openProfileModal,
          buttonNavigation,
          getUserDetails,
          loadingSkeleton,
          errorSucessBackground,
          setErrorSuccessBackground,
          responseF
        }}
      >
        {children}
      </appContext.Provider>
    );
}
