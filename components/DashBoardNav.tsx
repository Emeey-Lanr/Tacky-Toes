'use client'
import { appContext } from "@/appContext/MainAppContext";
import { useContext, useEffect, useState } from "react";
import SidebarNav from "./SidebarNav";
import { useParams } from "next/navigation";
import NameImgNav from "./SkeletonLoading/NameImgNav";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/Redux/store";
import { useSocket } from "@/socket";
import { newNotificationR, updateViewedR } from "@/Redux/Constituents/Notification";
import axios from "axios";
import { changeSideBar } from "@/Redux/Constituents/Hide";
const DashBoardNav = () => {
  const { socket } = useSocket()
  const {user_endpoint} = useContext(appContext)
  const params = useParams()
  const dispatch = useDispatch()
  const user = useSelector((state:RootState)=>state.User.value)
  const notification = useSelector((state:RootState)=>state.Notification.value)
    
  const { buttonNavigation, loadingSkeleton, getUserDetails } = useContext(appContext);
  const [openSideBar, setOpenSidebar] = useState<string>('dashboardNav:hidden')
  const [openCloseNotification, setOpenCloseNotification] = useState(false)
  const notificationSocket = ()=>{
    socket?.on("incomingNotification", (data:any) => {
     
       dispatch(newNotificationR(data.notification))
    })
  }
  useEffect(() => {
    getUserDetails()
    notificationSocket()
       socket?.emit("joinSocketApp", {
                username: params.dashboard,
              });
  },[])

  const notificationBtn = async () => {
    try {
      setOpenCloseNotification(!openCloseNotification);
       
      if (notification.filter((value) => !value.viewed).length > 0) {
        dispatch(updateViewedR(true))
       const changeViewed = await axios.put(
         `${user_endpoint}/updateNotificationViewed`,
         { username: user.username }
       );
      }
       
    } catch (error) {
      
    }
   
  }
  return (
    <div className="w-full sticky top-0 bg-white">
      <div className="mx-auto py-8 w-4/5 flex justify-between items-center">
        <div>
          <svg
            className="w-10 h-10"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3333 1H8C4.13401 1 1 4.13401 1 8.00001V24.3333M24.3333 1V71M24.3333 1H47.6667M24.3333 71H8.00001C4.13401 71 1 67.866 1 64V47.6667M24.3333 71H47.6667M47.6667 71H64C67.866 71 71 67.866 71 64V47.6667M47.6667 71V1M47.6667 1H64C67.866 1 71 4.13401 71 8V24.3333M71 24.3333H1M71 24.3333V47.6667M1 24.3333V47.6667M1 47.6667H71"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="flex items-center">
          {loadingSkeleton ? (
            <NameImgNav />
          ) : (
            <div className="flex items-center ">
              <p className="px-2 font-bold">{user.username}</p>
              {user.img_url === "" ? (
                <div className="h-10 w-10 bg-black rounded-full flex justify-center items-center">
                  <p className="text-white font-semibold text-2xl">
                    {user.username.split("")[0]}
                  </p>
                </div>
              ) : (
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.3333 1H8C4.13401 1 1 4.13401 1 8.00001V24.3333M24.3333 1V71M24.3333 1H47.6667M24.3333 71H8.00001C4.13401 71 1 67.866 1 64V47.6667M24.3333 71H47.6667M47.6667 71H64C67.866 71 71 67.866 71 64V47.6667M47.6667 71V1M47.6667 1H64C67.866 1 71 4.13401 71 8V24.3333M71 24.3333H1M71 24.3333V47.6667M1 24.3333V47.6667M1 47.6667H71"
                    stroke="black"
                    stroke-width="2"
                  />
                </svg>
              )}
            </div>
          )}
          <div className="px-5">
            <button
              onClick={() => notificationBtn()}
              style={{ borderRadius: "10px 10px 3px 3px" }}
              className="w-6 h-6 text-white text-sm bg-black rounded-t-full  relative"
            >
              {notification.filter((value) => !value.viewed).length}
              <span
                className={`w-2 h-2 rounded-full ${
                  notification.find((value) => !value.viewed)
                    ? `bg-red-600`
                    : `bg-black`
                } block absolute bottom-5 left-2 border border-white`}
              ></span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 ml-auto border-b border-gray-300 h-1" />
      <div className="w-3/5 flex items-center mx-auto py-8 modal:w-11/12">
        <input
          type="text"
          className="h-10 px-[8px] rounded-l-lg w-full border border-gray-300 border-r-0"
        />
        <button className="h-10 w-12  rounded-r-lg  bg-black flex justify-center items-center">
          <svg
            className="w-6 h-6"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.2917 19.25L10.7292 12.6875C10.2083 13.1042 9.60937 13.434 8.93229 13.6771C8.25521 13.9201 7.53472 14.0417 6.77083 14.0417C4.87847 14.0417 3.27708 13.3861 1.96667 12.075C0.65625 10.7639 0.000694444 9.1625 0 7.27083C0 5.37847 0.655556 3.77708 1.96667 2.46667C3.27778 1.15625 4.87917 0.500694 6.77083 0.5C8.66319 0.5 10.2646 1.15556 11.575 2.46667C12.8854 3.77778 13.541 5.37917 13.5417 7.27083C13.5417 8.03472 13.4201 8.75521 13.1771 9.43229C12.934 10.1094 12.6042 10.7083 12.1875 11.2292L18.75 17.7917L17.2917 19.25ZM6.77083 11.9583C8.07292 11.9583 9.17986 11.5024 10.0917 10.5906C11.0035 9.67882 11.459 8.57222 11.4583 7.27083C11.4583 5.96875 11.0024 4.8618 10.0906 3.95C9.17882 3.03819 8.07222 2.58264 6.77083 2.58333C5.46875 2.58333 4.3618 3.03924 3.45 3.95104C2.53819 4.86285 2.08264 5.96944 2.08333 7.27083C2.08333 8.57292 2.53924 9.67986 3.45104 10.5917C4.36285 11.5035 5.46944 11.959 6.77083 11.9583Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="w-4/5  mx-auto flex justify-between items-center modal:w-11/12">
        <div className=" block lmd:hidden">
          <button onClick={() => dispatch(changeSideBar(true))}>
            <span className="block w-8 h-1 mb-1 rounded-md bg-black"></span>
            <span className="block w-8 h-1 mb-1 rounded-md bg-black"></span>
            <span className="block w-8 h-1 mb-1 rounded-md bg-black"></span>
          </button>
        </div>
        <div className="hidden  h-20 lmd:flex lmd:items-center  ">
          <div className="w-40">
            <button
              onClick={() => buttonNavigation(`${params.dashboard}`)}
              className="h-10 w-40 text-sm border  text-gray-700  border-gray-400 rounded-md  "
            >
              Home
            </button>
          </div>
          <div className="w-40 mx-4">
            <button
              onClick={() =>
                buttonNavigation(`${params.dashboard}/transaction/history`)
              }
              className="mx-3 h-10 w-40 text-sm text-gray-700  border border-gray-400 rounded-md"
            >
              Transac.. History
            </button>
          </div>
          <div className="w-40 mx-4">
            <button
              onClick={() => buttonNavigation(`${params.dashboard}/pro`)}
              className="mx-3 h-10 w-40 text-sm text-gray-700  border border-gray-400 rounded-md"
            >
              Pro
            </button>
          </div>
          <div className="w-40 mx-4">
            <button
              onClick={() => buttonNavigation(`${params.dashboard}/profile`)}
              className="mx-3 h-10 w-40 text-sm  text-gray-700 border border-gray-400 rounded-md"
            >
              Profile
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={() => buttonNavigation(`${params.dashboard}/create`)}
            className="h-10 w-10 text-white font-bold rounded-md bg-black flex justify-center items-center lmd:h-10 lmd:w-10"
          >
            <span className="w-6 h-6 border border-white flex justify-center items-center rounded bg-white text-black">
              +
            </span>
          </button>
        </div>
      </div>

      <div className="w-11/12 mr-auto border-b border-gray-300 h-1" />
      {openCloseNotification && (
        <div className="w-72 h-72 bg-black fixed top-20 right-6 rounded-md py-2 px-4">
          {notification.map((value, id) => (
            <p
              key={id}
              className=" text-white text-xs w-64 border px-2 py-2 rounded-md"
            >
              <span className="w-2 h-2 bg-white rounded-full block"></span>
              <span>{value.game_title}</span>
              <span className="leading-5 w-64 overflow-x-hidden  text-ellipsis block">
                {value.notification}
              </span>
              <span className="w-50 overflow-x-hidden  text-ellipsis block ">
                <a href=" http://localhost:3000/Emeey/play/Lanr/Emeey5nglok0icvs">
                  {` http://localhost:3000/${
                    value.notification.split(" ")[0].split("@")[1]
                  }/play/${value.username}/${value.game_id}`}
                </a>
              </span>
            </p>
          ))}
        </div>
      )}
      <SidebarNav setOpenSidebar={setOpenSidebar} openSideBar={openSideBar} />
    </div>
  );
}

export default DashBoardNav