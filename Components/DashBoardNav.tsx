'use client'
import Image from "next/image"
import logo from "../public/icon/logo.svg"
import search from "../public/icon/search.svg"
import { appContext } from "@/appContext/MainAppContext";
import { useContext, useEffect, useState } from "react";
import SidebarNav from "./SidebarNav";
import { useParams } from "next/navigation";
import NameImgNav from "./SkeletonLoading/NameImgNav";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
const DashBoardNav = () => {

  const params = useParams()
  const user = useSelector((state:RootState)=>state.User.value)
    const { buttonNavigation, loadingSkeleton, getUserDetails } = useContext(appContext);
  const [openSideBar, setOpenSidebar] = useState<string>('dashboardNav:hidden')
  const [openCloseNotification, setOpenCloseNotification] = useState(false)
  useEffect(() => {
    getUserDetails()
  },[])

  
  return (
    <div className="w-full sticky top-0 bg-white">
      <div className="mx-auto py-8 w-4/5 flex justify-between items-center">
        <div>
          <Image className="w-10 h-10" src={logo} alt="logo" />
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
                <Image
                  className="w-7 h-7 rounded-full object-cover"
                  src={logo}
                  alt="user-img"
                />
              )}
            </div>
          )}
          <div className="px-5">
            <button onClick={()=>setOpenCloseNotification(!openCloseNotification)}
              style={{ borderRadius: "10px 10px 3px 3px" }}
              className="w-6 h-6 bg-black rounded-t-full  relative"
            >
              <span className="w-2 h-2 rounded-full bg-black block absolute bottom-5 left-2 border border-white"></span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 ml-auto border-b border-gray-300 h-1" />
      <div className="w-3/5 flex items-center mx-auto py-8 modal:w-11/12">
        <input
          type="text"
          className="h-10 rounded-l-lg w-full border border-gray-300 border-r-0"
        />
        <button className="h-10 w-12  rounded-r-lg roud bg-black flex justify-center items-center">
          <Image className="w-5 h-5" src={search} alt="search" />
        </button>
      </div>

      <div className="w-4/5  mx-auto flex justify-between items-center modal:w-11/12">
        <div className="hidden dashboardNav:block">
          <button onClick={() => setOpenSidebar("")}>
            <span className="block w-8 h-1 mb-1 rounded-md bg-black"></span>
            <span className="block w-8 h-1 mb-1 rounded-md bg-black"></span>
            <span className="block w-8 h-1 mb-1 rounded-md bg-black"></span>
          </button>
        </div>
        <div className="flex items-center  h-20  dashboardNav:hidden">
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
            className="h-10 w-10 text-white font-bold rounded-md bg-black flex justify-center items-center"
          >
            <span className="w-6 h-6 border border-white flex justify-center items-center rounded bg-white text-black">
              +
            </span>
          </button>
        </div>
      </div>

      <div className="w-11/12 mr-auto border-b border-gray-300 h-1" />
      {openCloseNotification && <div className="w-72 h-72 bg-black fixed top-20 right-6 rounded-md py-2 px-4">
        <p className=" text-white text-xs w-64 border px-2 py-2 rounded-md">
          <span className="w-2 h-2 bg-white rounded-full block"></span>
          <span className="leading-5 w-64 overflow-x-hidden  text-ellipsis block">
            Added as a versus by @emeey
          </span>
          <span className="w-50 overflow-x-hidden  text-ellipsis block ">
            <a href=" http://localhost:3000/Emeey/play/Lanr/Emeey5nglok0icvs">
              http://localhost:3000/Emeey/play/Lanr/Emeey5nglok0icvs
            </a>
          </span>
        </p>
        
      </div>}
      <SidebarNav setOpenSidebar={setOpenSidebar} openSideBar={openSideBar} />
    </div>
  );
}

export default DashBoardNav