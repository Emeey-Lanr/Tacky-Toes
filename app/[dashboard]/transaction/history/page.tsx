'use client'
import DashBoardNav from "@/components/DashBoardNav"
import { useContext } from "react";
import { appContext } from "@/appContext/MainAppContext";
import DeleteIcon from "@/components/DeleteIcon";
import DeleteModal from "@/components/DeleteModal";
import TransactionHistorySkeleton from "@/components/SkeletonLoading/TransactionHistory";
const Transaction = () => {
    const {openExitDeleteModal} = useContext(appContext)
  return (
    <div>
      <DashBoardNav />
      <TransactionHistorySkeleton/>
      {/* <div className="w-full">
        <div className=" w-4/5  rounded-md flex justify-between items-center mx-auto border-gray-500 shadow-md my-4">
          <div className="">
            <div className="w-30 h-20 bg-black flex justify-center items-center">
              <div className="px-3">
                <h1 className="text-2xl text-white font-bold">A MONTH</h1>
              </div>
              <div className=" py-2 flex justify-center items-center w-8 h-8 bg-white rounded-full">
                <h1 className="font-bold text-1xl">$1</h1>
              </div>
            </div>
            <div className="border">
              <div className="my-1 px-5">
                              <span className="font-bold">Subscription-date:</span>
                              <span className="text-sm text-gray-500">10/01/2012</span>
              </div>
              <div className="my-1 px-5">
                              <span className="font-bold">Subscription-ends:</span>
                              <span className="text-sm text-gray-500">11/01/2012</span>
              </div>
            </div>
          </div>
          <div className="pr-8">
            <button onClick={()=>openExitDeleteModal(true, 'Delete History', 'Are your sure you want to delete?', 2)} className="w-8 h-8 border border-red-700 rounded-full flex  justify-center items-center">
              <DeleteIcon width="w-4" height="h-4" />
            </button>
          </div>
        </div>
          </div> */}
          <DeleteModal/>
    </div>
  );
}

export default Transaction