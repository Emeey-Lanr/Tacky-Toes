'use client'
import DashBoardNav from "@/Components/DashBoardNav"
import linkIcon from "@/public/icon/link-icon.svg";
import Image from "next/image";
import { appContext } from "@/appContext/MainAppContext";
import { useContext, useEffect, useState } from "react";
import DeleteModal from "@/Components/DeleteModal";
import axios from "axios";
import { useParams } from "next/navigation";
import CurrentGameLoading from "@/Components/SkeletonLoading/CurrentGameLoading";
import { GAME } from "@/Redux/Constituents/Game";

const GameDetails = () => {
  const params = useParams()
  const { openExitDeleteModal, game_endpoint } = useContext(appContext);
  const [loading, setLoading] = useState<boolean>(false)
  const [gameDetails, setGameDetails] = useState<GAME>(
    {
     id :0,
      creator_username :"",
      creator_email :"",
      game_name : "",
      player_username :"",
      game_id :"",
      creator_score :0,
      player_score :0,
      played:false,
}

  )
  const getCurrentGameF = async () => {
    try {
          setLoading(false);
          const getCurrentDetails = await axios.get(
            `${game_endpoint}/get/current/game`,
            {
              headers: {
                Authorization: `bearers ${params.dashboard}-${params.game_id}`,
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
      );
      setGameDetails(getCurrentDetails.data.info)
      setLoading(true)
      
    } catch (error:any) {  
      console.log(error.response.data.message)
    }
  
  }
  useEffect(() => {
    console.log(params)
    getCurrentGameF()
  
    },[])

  return (
    <div>
      <DashBoardNav />
      <div className="my-10">
        {!loading ? (
          <div className="w-4/5 mx-auto border rounded-t-md animate- flex justify-center items-center border-gray-300 py-5 ">
            <CurrentGameLoading />
          </div>
        ) : (
          <div className="w-4/5 mx-auto border border-gray-300 py-5 rounded-md modal:w-11/12">
            <div className="w-4/5 mx-auto modal:w-11/12">
              <h1 className="text-2xl  font-bold py-3">Game Details</h1>
              <p className="text-xl font-meduim py-2">Scores</p>
              <div className="h-10 w-36 bg-black rounded-md flex justify-between items-center">
                <div className="w-4/12 flex justify-center items-center">
                    <span className="text-gray-100 font-bold ">{gameDetails.creator_username.split("")[0].toUpperCase()}</span>
                  <span className="text-gray-100 font-bold px-1">0</span>
                </div>
                <div className="w-4/12 flex justify-center items-center">
                  <h2 className="text-xl text-white">VS</h2>
                </div>
                <div className="w-4/12 flex justify-center items-center">
                    <span className="text-gray-100 font-bold ">{gameDetails.player_username.split("")[0].toUpperCase()}</span>
                  <span className="text-gray-100 font-bold px-1">0</span>
                </div>
              </div>
              <div className="flex items-center py-6">
                <div>
                  <Image className="h-5 w-5" src={linkIcon} alt="" />
                </div>
                <p className="text-sm px-3 text-gray-800">
                  {`http://localhost:3000/${gameDetails.creator_username}/play/${gameDetails.player_username}/${gameDetails.game_id}`}

              </p>
              </div>
              <div className="w-full my-4 flex">
                <div className="bg-black rounded-l-md  w-40 h-10 flex items-center">
                  <p className="text-sm text-white px-2 box-border w-full">
                    Game Name
                  </p>
                </div>
                <div className="h-10 px-2 w-full rounded-r-md flex items-center border border-l-0 border-gray-400">
                    <p>{gameDetails.game_name }</p>
                </div>
              </div>
              <div className="w-full my-4 flex">
                <div className="bg-black rounded-l-md w-40 h-10 flex items-center">
                  <p className="text-sm text-white px-2 box-border w-full">
                    Versus
                  </p>
                </div>
                <div className="h-10 px-2 w-full rounded-r-md flex items-center border border-l-0 border-gray-400">
                    <p>{gameDetails.player_username}</p>
                </div>
              </div>
              <div className="w-full">
                <button
                  onClick={() =>
                    openExitDeleteModal(
                      true,
                      "Delete Game",
                      "Are you sure you want to delete",
                      1,
                    "game",
                    {game_name:gameDetails.game_name, game_id:gameDetails.game_id, username:gameDetails.creator_username,email:gameDetails.creator_email, player:gameDetails.player_username }
                    )
                  }
                  className="w-full h-10 text-white bg-black rounded-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <DeleteModal />
    </div>
  );
}

export default GameDetails