'use client'
import { useSelector } from "react-redux"
import { RootState } from "@/Redux/store";
import { appContext } from "@/appContext/MainAppContext";
import { useContext } from "react";
const DeleteModal = () => {
    const {openExitDeleteModal} =  useContext(appContext)
 const deleteModalDetails = useSelector((state:RootState)=>state.DeleteModalS.value)
   
    
    return (
      <>
        {deleteModalDetails.modal_state && (
          <div className="modal-bg w-full h-full fixed top-0 flex justify-center items-center">
            <div className="w-96 py-5 rounded-md bg-black modal:w-11/12">
              <div className="w-4/5 mx-auto  flex justify-end items-center">
                <button
                  className="h-6 w-6 flex  justify-center items-center border border-white rounded-full text-white"
                  onClick={() => openExitDeleteModal(false, "", "", 0)}
                >
                  x
                </button>
              </div>
              <div className="w-4/5 mx-auto py-3">
                <h1 className="font-bold text-gray-100">{deleteModalDetails.modal_message}</h1>
                <p className="text-xs py-1 text-gray-200">
                  {deleteModalDetails.modal_text}
                </p>
              </div>
            
              <div className="w-4/5 mx-auto">
                <button className="w-full h-10 rounded-md bg-white text-sm">
                  Proceed
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default DeleteModal