"use client";
import Image from "next/image";
import { SetStateAction } from "react";
import home from "@/public/icon/home.svg";
import pro from "@/public/icon/pro.svg";
import transaction from "@/public/icon/transaction.svg";
import logo from "@/public/icon/logo.svg";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { useDispatch } from "react-redux";
import { changeSideBar } from "@/Redux/Constituents/Hide";
interface SidebarNavD {
  setOpenSidebar: (value: SetStateAction<string>) => void;
  openSideBar: string;
}
const SidebarNav = ({ setOpenSidebar, openSideBar }: SidebarNavD) => {
  const router = useRouter();
  const userDetails = useSelector((state: RootState) => state.User.value);
  const hideUI = useSelector((state:RootState)=>state.Hide.value) 
  const dispatch = useDispatch()
  const navigateTo = (url: string) => {
    setOpenSidebar("dashboardNav:hidden");
    router.push(`/${url}`);
  };

  return (
    <>
      {hideUI.hideSideBar && 
        <div className={`block lmd:hidden`}>
          <div
            onClick={() => dispatch(changeSideBar(false))}
            className={`w-full h-full  fixed top-0 left-0  modal-bg nav `}
          ></div>

          <div className={`w-64 h-full  fixed top-0 left-0  bg-white nav `}>
            <div className="">
              <div className="w-11/12 h-20 flex items-center mx-auto">
                <Image className="h-10 w-10" src={logo} alt="b" />
                <h1 className="text-2xl font-bold px-4">Tacky Toes</h1>
              </div>
              <div className="w-11/12 h-2 mx-auto border-b border-black"></div>
            </div>
            <div className="pt-3">
              <div className="w-11/12 mb-4 mx-auto h-23">
                <button
                  onClick={() => navigateTo(`${userDetails.username}`)}
                  className="flex items-center w-full h-10 px-2 hover:bg-gray-300 hover:rounded-md"
                >
                  <Image className="h-4 w-4" src={home} alt="sidebar-icon" />
                  <p className="text-sm px-2">Home</p>
                </button>
              </div>
              <div className="w-11/12 mb-4 mx-auto h-23">
                <button className="flex items-center w-full h-10 px-2 hover:bg-gray-300 hover:rounded-md">
                  <Image
                    className="w-4 h-4"
                    src={transaction}
                    alt="sidebar-icon"
                  />
                  <p className="text-sm px-2">Transaction History</p>
                </button>
              </div>
              <div className="w-11/12 mb-4 mx-auto h-23">
                <button className="flex items-center w-full h-10 px-2 hover:bg-gray-300 hover:rounded-md">
                  <Image className="h-4 w-4" src={pro} alt="sidebar-icon" />
                  <p className="text-sm px-2">Pro</p>
                </button>
              </div>
            </div>

            <div className="w-full flex h-10  absolute bottom-0">
              <div className="flex justify-between w-11/12 mx-auto border px-2 rounded-md border-gray-500 ">
                <div className="flex justify-between items-center">
                  <Image className="w-5 h-5 rounded-full" src={pro} alt="" />
                  <p className="text-sm">Profile</p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="w-9 h-6 bg-black rounded-md text-xs text-white">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default SidebarNav;
