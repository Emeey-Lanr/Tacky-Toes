'use client'
import DashBoardNav from "@/Components/DashBoardNav"
import linkIcon from "@/public/icon/link-icon.svg";
import Image from "next/image";
import { appContext } from "@/appContext/MainAppContext";
import { useContext } from "react";
import DeleteModal from "@/Components/DeleteModal";

const GameDetails = () => {
      const { openExitDeleteModal } = useContext(appContext);
  return (
    <div>
      <DashBoardNav />
      <div className="my-10">
        <div className="w-4/5 mx-auto border border-gray-300 py-5 rounded-md">
          <div className="w-4/5 mx-auto">
            <h1 className="text-2xl  font-bold py-3">Game Details</h1>
            <p className="text-xl font-meduim py-2">Scores</p>
            <div className="h-10 w-36 bg-black rounded-md flex justify-between items-center">
              <div className="w-4/12 flex justify-center items-center">
                <span className="text-gray-100 font-bold ">M</span>
                <span className="text-gray-100 font-bold px-1">0</span>
              </div>
              <div className="w-4/12 flex justify-center items-center">
                <h2 className="text-xl text-white">Vs</h2>
              </div>
              <div className="w-4/12 flex justify-center items-center">
                <span className="text-gray-100 font-bold ">E</span>
                <span className="text-gray-100 font-bold px-1">0</span>
              </div>
            </div>
            <div className="flex items-center py-6">
              <div>
                <Image className="h-5 w-5" src={linkIcon} alt="" />
              </div>
              {/* <p className="text-sm px-3 text-gray-800">
                http://localhost:3000/emeey/play/tunde/473474747
              </p> */}
            </div>
            <div className="w-full my-4 flex">
              <div className="bg-black rounded-l-md  w-40 h-10 flex items-center">
                <p className="text-sm text-white px-2 box-border">Game Name</p>
              </div>
              <div className="h-10 px-2 w-full rounded-r-md flex items-center border border-l-0 border-gray-400">
                <p>Game Name</p>
              </div>
            </div>
            <div className="w-full my-4 flex">
              <div className="bg-black rounded-l-md  w-40 h-10 flex items-center">
                <p className="text-sm text-white px-2 box-border">
                  Players's Name
                </p>
              </div>
              <div className="h-10 px-2 w-full rounded-r-md flex items-center border border-l-0 border-gray-400">
                <p>Emmanuel</p>
              </div>
            </div>
            <div className="w-full">
              <button
                onClick={() =>
                  openExitDeleteModal(
                    true,
                    "Delete Game",
                    "Are you sure you want to delete",
                    1
                  )
                }
                className="w-full h-10 text-white bg-black rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal />
    </div>
  );
}

export default GameDetails