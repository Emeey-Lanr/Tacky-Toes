'use client'

import { SetStateAction } from "react";



interface SidebarNavD {
  setOpenSidebar: (value: SetStateAction<string>) => void;
  openSideBar: string;
}
const SidebarNav = ({setOpenSidebar,openSideBar}:SidebarNavD) => {
    return (
      <>
        <div onClick={()=>setOpenSidebar("dashboardNav:hidden")}
          className={`w-full h-full  fixed top-0 left-0  modal-bg nav hideNav:hidden ${openSideBar}`}
        ></div>
        <div
          className={`w-64 h-full  fixed top-0 left-0  bg-white nav hideNav:hidden ${openSideBar}`}
        ></div>
      </>
    );
}

export default SidebarNav