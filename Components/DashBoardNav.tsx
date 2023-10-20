'use client'
import Image from "next/image"
import logo from "../public/icon/logo.svg"
import search from "../public/icon/search.svg"
import { appContext } from "@/appContext/MainAppContext";
import { useContext, useState } from "react";
import SidebarNav from "./SidebarNav";
const DashBoardNav = () => {
  const { buttonNavigation } = useContext(appContext);
  const [openSideBar, setOpenSidebar] = useState<string>('dashboardNav:hidden')
  return (
    <div className="w-full sticky top-0 bg-white">
      <div className="mx-auto py-8 w-4/5 flex justify-between items-center">
        <div>
          <Image className="w-10 h-10" src={logo} alt="logo" />
        </div>
        <div className="flex items-center ">
          <p className="px-2 font-bold">Emeey</p>
          <Image
            className="w-7 h-7 rounded-full object-cover"
            src={logo}
            alt="user-img"
          />
        </div>
      </div>
      <div className="w-11/12 ml-auto border-b border-gray-300 h-1" />
      <div className="w-3/5 flex items-center mx-auto py-8">
        <input
          type="text"
          className="h-10 rounded-l-lg w-full border border-gray-300 border-r-0"
        />
        <button className="h-10 w-12  rounded-r-lg roud bg-black flex justify-center items-center">
          <Image className="w-5 h-5" src={search} alt="search" />
        </button>
      </div>

      <div className="w-4/5  mx-auto flex justify-between items-center">
        <div className="hidden dashboardNav:block">
          <button onClick={()=>setOpenSidebar("")}>
            <span className="block w-10 h-1 mb-1 rounded-md bg-black"></span>
            <span className="block w-10 h-1 mb-1 rounded-md bg-black"></span>
            <span className="block w-10 h-1 mb-1 rounded-md bg-black"></span>
          </button>
        </div>
        <div className="flex items-center  h-20  dashboardNav:hidden">
          <div className="w-40">
            <button
              onClick={() => buttonNavigation("home")}
              className="h-10 w-40 text-sm border  text-gray-700  border-gray-400 rounded-md  "
            >
              Home
            </button>
          </div>
          <div className="w-40 mx-4">
            <button className="mx-3 h-10 w-40 text-sm text-gray-700  border border-gray-400 rounded-md">
              Transac.. History
            </button>
          </div>
          <div className="w-40 mx-4">
            <button className="mx-3 h-10 w-40 text-sm text-gray-700  border border-gray-400 rounded-md">
              Pro
            </button>
          </div>
          <div className="w-40 mx-4">
            <button className="mx-3 h-10 w-40 text-sm  text-gray-700 border border-gray-400 rounded-md">
              Profile
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={() => buttonNavigation(`${"Emeey"}/create`)}
            className="h-10 w-10 text-white font-bold rounded-md bg-black flex justify-center items-center"
          >
            <span className="w-6 h-6 border border-white flex justify-center items-center rounded bg-white text-black">
              +
            </span>
          </button>
        </div>
      </div>

      <div className="w-11/12 mr-auto border-b border-gray-300 h-1" />
      <SidebarNav setOpenSidebar={setOpenSidebar} openSideBar={ openSideBar} />
    </div>
    
  );
}

export default DashBoardNav