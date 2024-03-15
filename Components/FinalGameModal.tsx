import { RootState } from "@/Redux/store";
import { appContext } from "@/appContext/MainAppContext";
import React, { useContext } from "react";
import { useSelector } from "react-redux";
const FinalGameModal = ({ isOwner }: { isOwner: number }) => {
  const { buttonNavigation } = useContext(appContext);
  const gameDetails = useSelector(
    (state: RootState) => state.GameStarted.value
  );
  return (
    <div className="w-full h-full fixed top-0 bg-white flex justify-center items-center">
      <div>
        <p className="text-center py-2 text-gray-700">Thanks for playing</p>
        <p className="text-center"></p>
        <div className="w-96 h-11 bg-black flex justify-between px-1 items-center my-2 rounded-sm">
          <p className="text-white font-bold">Round</p>
          <span className="flex justify-center items-center h-10 w-10 bg-white rounded-full">
            4
          </span>
        </div>
        <div className="w-96 h-11 bg-black flex justify-between px-1 items-center my-2 rounded-sm">
          <p className="text-white font-bold">{gameDetails.creator}</p>
          <span className="flex justify-center items-center h-10 w-10 bg-white rounded-full">
            {gameDetails.creatorScore}
          </span>
        </div>
        <div className="w-96 h-11 bg-black flex justify-between px-1 items-center my-2 rounded-sm">
          <p className="text-white font-bold">{gameDetails.versus}</p>
          <span className="flex justify-center items-center h-10 w-10 bg-white rounded-full">
            {gameDetails.versusScore}
          </span>
        </div>
        <div className="w-96 h-11">
          <button
            onClick={() =>
              buttonNavigation(
                `${
                  isOwner === 0
                    ? `${gameDetails.creator}`
                    : `${gameDetails.versus}`
                }`
              )
            }
            className="rounded-sm border w-full h-full font-bold text-gray-700 hover:bg-black hover:rounded-md hover:text-white "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalGameModal;
