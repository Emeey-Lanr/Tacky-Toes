'use client'
import ChangePassword from "@/Components/ChangePassword";
import DashBoardNav from "@/Components/DashBoardNav"
import DeleteAccount from "@/Components/DeleteAccount";
import ProfileSkeleton from "@/Components/SkeletonLoading/ProfileSkeleton";
import { appContext } from "@/appContext/MainAppContext";
import { useContext, useEffect } from "react";
const Profile = () => {
  const { openProfileModal,loadingSkeleton, getUserDetails } = useContext(appContext);
  useEffect(() => {
    getUserDetails()
  },[])
  return (
    <div>
      <DashBoardNav />
      {loadingSkeleton ? (
        <ProfileSkeleton />
      ) : (
        <div className="py-10">
          <div className="w-4/5 mx-auto border border-gray-300 py-9 mt-4 rounded-md">
            <div className="w-4/5 mx-auto flex justify-center items-center">
              <div className="w-44 h-44 bg-black rounded-md flex justify-center items-center">
                <h2 className="text-white font-bold text-2xl">EM</h2>
              </div>
            </div>
            <div className="w-4/5 mx-auto my-4 flex items-center">
              <div className="bg-black rounded-l-md w-40 h-10 flex items-center">
                <p className="text-sm text-white px-2 box-border">Email</p>
              </div>
              <div className="h-10 px-2 rounded-r-md w-full flex items-center border border-l-0 border-gray-400">
                <p>Emmanuel</p>
              </div>
            </div>
            <div className="w-4/5 mx-auto my-4 flex items-center">
              <div className="bg-black rounded-l-md  w-40 h-10 flex items-center">
                <p className="text-sm text-white px-2 box-border">Username</p>
              </div>
              <div className="h-10 px-2 rounded-r-md w-full flex items-center border border-l-0 border-gray-400">
                <p>Emmanuel</p>
              </div>
            </div>
            <div className="w-4/5 mx-auto my-4 flex">
              <div className="bg-black rounded-l-md  w-40 h-10 flex items-center">
                <p className="text-sm text-white px-2 box-border">
                  Phone Number
                </p>
              </div>
              <div className="h-10 px-2 w-full rounded-r-md flex items-center border border-l-0 border-gray-400">
                <p>Emmanuel</p>
              </div>
            </div>
            <div className="flex items-center w-4/5 mx-auto my-4">
              <div className="rounded-r-md h-10 w-full  flex items-center border border-r-0 border-gray-300">
                <p className="text-sm px-2  box-border">Password</p>
              </div>
              <button
                onClick={() => openProfileModal(1)}
                className="h-10 w-40 bg-black rounded-r-md text-sm text-white"
              >
                Change
              </button>
            </div>
            <div className="w-4/5 mx-auto">
              <button
                onClick={() => openProfileModal(2)}
                className="h-10 w-full bg-black rounded-md text-white text-sm "
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      )}

    

      <ChangePassword />
      <DeleteAccount />
    </div>
  );
}

export default Profile