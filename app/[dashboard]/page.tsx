'use client'
import DashBoardNav from "@/Components/DashBoardNav"
import DeleteModal from "@/Components/DeleteModal"
import { appContext } from "@/appContext/MainAppContext"
import { useContext, useEffect } from "react"
import DeleteIcon from "@/Components/DeleteIcon"
import DashboardLoading from "@/Components/SkeletonLoading/DashboardLoading"
import { useSelector } from "react-redux"
import { RootState } from "@/Redux/store"
const Dashboard = () => {
  const { openExitDeleteModal, getUserDetails, loadingSkeleton } = useContext(appContext)
  const game = useSelector((state:RootState)=>state.Game.value)
  useEffect(() => {
      getUserDetails()
    },[])
    return (
      <div>
        <DashBoardNav />

        {loadingSkeleton ? (
          <DashboardLoading />
        ) : (
          <div>
            {game.length > 0 ? (
              <div className="h-grid">
                <div className="border w-full mt-4  border-gray-300 shadow-md rounded-md  py-4">
                  <div className="w-11/12  mx-auto flex justify-between items-center">
                    <div className="w-4/5">
                      <p className="text-sm text-gray-600 py-2">Game Name</p>
                      <div className="w-4/5 h-10 flex justify-center items-center  rounded-md border border-black">
                        <p className="text-sm ">Zender</p>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button
                        className="w-8 h-8  rounded-full border border-red-600 flex justify-center items-center"
                        onClick={() =>
                          openExitDeleteModal(
                            true,
                            "Delete Game",
                            "Are you sure you want to delete ?",
                            1
                          )
                        }
                      >
                        <DeleteIcon width="w-4" height="h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto my-4">
                    <button className="w-full h-10 rounded-md bg-black text-white text-sm">
                      Proceed to Details
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-96 flex justify-center items-center">
                <div>
                  <h1 className="text-center font-semibold text-5xl text-gray-300 my-4">
                    No Games Created
                  </h1>
                  <h1 className="text-center font-semibold text-4xl text-gray-300 my-4">
                    Start Creating
                  </h1>
                </div>
              </div>
            )}
          </div>
        )}
        {/* */}
        <DeleteModal />
      </div>
    );
}
export default Dashboard