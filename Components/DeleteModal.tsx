'use client'
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/Redux/store";
import { appContext } from "@/appContext/MainAppContext";
import { useContext } from "react";
import axios from "axios";
import Error from "./Error";
import { changeErrorMessage } from "@/Redux/Constituents/Error";
import { collectGameDetailsR } from "@/Redux/Constituents/Game";

const DeleteModal = () => {
  const { openExitDeleteModal, game_endpoint, buttonNavigation } = useContext(appContext)
  const dispatch = useDispatch<AppDispatch>()
  const deleteModalDetails = useSelector((state: RootState) => state.DeleteModalS.value)
  const userDetails  = useSelector((state:RootState)=>state.User.value)
   
  const deleteGame = async () => {
    try {
      const deleteGame = await axios.delete(`${game_endpoint}/delete/${deleteModalDetails.data.game_id}-${deleteModalDetails.data.username}-${deleteModalDetails.data.game_name}`)
       
     
      if (deleteModalDetails.componentName === 'game') {
        buttonNavigation(`${userDetails.username}`)
           openExitDeleteModal(false, "", "", 0, "", "");
      } else {
        dispatch(collectGameDetailsR(deleteGame.data.info));
          openExitDeleteModal(false, "", "", 0, "", "");
      }
   
    } catch (error:any) {
      dispatch(changeErrorMessage(`${error.response.data.message}`))
    }
  }
  const deleteBtn = async () => {
    console.log(deleteModalDetails.data)
    try {
        switch ( Number(deleteModalDetails.phaseUsage)) {
          case 1:
            return deleteGame();
          case 2:
            return "hello"
          
          
        }
      } catch (error) {
        
      }
  }
  const exitModal = () => {
    // openExitDeleteModal(false, "", "", 0, "") 
    changeErrorMessage("")
    
  }
    return (
      <>
        {deleteModalDetails.modal_state && (
          <div className="modal-bg w-full h-full fixed top-0 flex justify-center items-center">
            <div className="w-96 py-5 rounded-md bg-black modal:w-11/12">
              <div className="w-4/5 mx-auto  flex justify-end items-center">
                <button
                  className="h-6 w-6 flex  justify-center items-center border border-white rounded-full text-white"
                  onClick={() => exitModal()}
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
                <Error height="h-4" background="bg-red-400"/>

              </div>
            
              <div className="w-4/5 mx-auto">
                <button onClick={()=>deleteBtn()} className="w-full h-10 rounded-md bg-white text-sm">
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