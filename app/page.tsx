
'use client'
import {useRouter} from "next/navigation"
import { appContext } from "@/appContext/MainAppContext";
import  {useEffect, useState, useContext} from "react"
const Home = () => {
  const {getUserDetails,loadingStageNumb} = useContext(appContext)
  const [styleNumb, setStyleNumb] = useState(0)
  const [style, setStyle] = useState('border-t-black')
 useEffect (()=>{
   setTimeout(() => {
     setStyleNumb(styleNumb + 1)
   }, 2000)
   if (styleNumb === 1) {
     setStyle('border-t-black border-r-black')
   }else if(styleNumb === 2){
    setStyle('border-t-black border-r-black border-b-black')
   }else if(styleNumb === 3){
     setStyle("border-t-black border-r-black border-b-black border-l-black")
     
   }else if(styleNumb >= 4){
    setStyle('')
    getUserDetails()
     if (loadingStageNumb.numb === 1) {
       router.push(`/${loadingStageNumb.username}`)
     }
   }
   
 }, [styleNumb])
  const router = useRouter()
  return (
    <div className="w-full h-full fixed top-0 flex justify-center items-center">
      <div className="w-full">
        <div className={`animate-ping h-[96px] mx-auto w-[96px] border-4 ${style} border-grey-100 flex items-center justify-center `}>
          <svg
            className="h-[48px] w-[48px] animate-spin"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.343262 13.5911L50.3433 13.5911M0.343262 33.2492H50.3433M13.2978 0.343262L13.2978 50.3433M33.5251 0.343262V50.3433"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        {styleNumb >= 3 && <div className="w-full py-[24px] absolute bottom-0">
          <p className="text-2xl  text-gray-800 font-semibold text-center">
            Tacky Toes
          </p>{" "}
          <br />
        </div>}
        {/* <div className="w-[100%]">
          <button onClick={()=>router.push("/signin")} className="block w-[90%] text-sm font-semibold mx-auto h-10 border border-gray-600 bg-black text-white ">Signup</button>
          <button className="block  w-[90%] mx-auto text-sm font-semibold  mt-[12px] h-10 border border-gray-600  hover:bg-grey-100 hover:text-white hover:border-gray-800">Play</button>
        </div> */}
      </div>
    </div>
  );
}

export default Home