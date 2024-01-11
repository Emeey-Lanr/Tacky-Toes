"use client"
import SideImg from "@/Components/SideImg"
import Image from "next/image";
import LoadingIcon from "@/public/icon/loading.svg"
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { appContext } from "@/appContext/MainAppContext";
import { useSocket } from "@/socket";
import Error from "@/Components/Error";
 import GamePage from "@/Components/GamePage";
import { collectDetails } from "@/Redux/Constituents/GameStarted";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
const page = () => {
  const { socket } = useSocket();
   const dispatch = useDispatch()
  const { play_game_endpoint, buttonNavigation, responseF } = useContext(appContext);
      const gameDetails = useSelector((state: RootState) => state.GameStarted.value)
  const params = useParams();
  const date = new Date();
  const [currentYear, setCurrentYear] = useState(`${date.getFullYear()}`);
  const [error, setError] = useState<boolean>(false);

  const [isOwner, setIsOwner] = useState<number>(-1);
  // -1 on verifying state
  // 0 for owner
  // 1 for notowner

  const [notificationStyle, setNotificationStyle] = useState("notjoined")
  const [userData, setUserData] = useState<{creator_username:string, player_username:string}>({creator_username:"", player_username:""})
  const [startMessage, setStartMessage] = useState<string>("")
  const [startNotificationStatus, setStartNotificationStatus] = useState<boolean>(false)
  const [opponentName, setOpponentName] = useState<string>("")
  // I for verification phase
  // 2 for game phase
  const [gamePhase, setGamePhase] = useState(1)
  const verifyUser = async () => {
    try {
      const verify = await axios.get(`${play_game_endpoint}`, {
        headers: {
          Authorization: `bearer ${`${
            localStorage.txxxx ? localStorage.txxxx : null
          }/${params.dashboard}/${params.username}/${params.id}`}`,
          "Content-Type": "application/json",
          Accept: "application/Json",
        },
      });
     
      if (verify.data.info.isOwner) {
        setIsOwner(0)
      }else{
        setIsOwner(1)
      }
      console.log(verify.data,"Lkjhgfds")
      setUserData(verify.data.info.gameDetails)
      const joinGame = await socket?.emit("joinGame", {gameDetails:verify.data.info.gameDetails, isOwner:verify.data.info.isOwner})
    } catch (error: any) {

      console.log(error)
      if (error.message === "Network Error") {
        responseF(`${error.message}`, `bg-red-300`); 
      } else {
        if (error.response.data.message === "Redirect-To-Login") {
          localStorage.gameRoute = `${params.dashboard}/play/${params.username}/${params.id}`
          localStorage.loginToGame = true
          buttonNavigation("signin")
        } else {
          responseF(`${error.response.data.message}`, `bg-red-300`);
        }
      }
        console.log(error);
    }
  };

  const onePersonHasJoined = ()=> {
   socket?.on("onePersonJoined", (data)=>{
     console.log(data)
   })
  }
  
  const startNotification = ()=>{
    socket?.on("startGameNotification", (data) => {
      if (data.startGame) {
        setOpponentName(`${data.opponentsName}`)
        setNotificationStyle("joined")
        setStartNotificationStatus(true)
      } else {
        setNotificationStyle("notjoined")
      }
 
    })
  }

  const gameNavigation = () => {
    socket?.on("changePhase", (data) => {
      console.log(data.gameInfo.gameData, ";lkjhgfds")
    dispatch(collectDetails(data.gameInfo.gameData))
    setGamePhase(2)
    })
  }

  useEffect( () => {
    verifyUser();
        onePersonHasJoined();
         startNotification();
         gameNavigation();

  }, []);
   
  
 
  const changeBtn = ()=>{
    setNotificationStyle("joined")
  }
  const startGameBtn = () => {
  
    socket?.emit("navigateToStartGame", {navigateToStart:true, creator:userData.creator_username, versus:userData.player_username, gameId:params.id, startId:`${params.id}` +  `${params.username}`})
  }
  const playBtn = () => {
    
  }
  const checkIt = () => {
    console.log(gameDetails)
  }
  return (
    <>
      {gamePhase === 1 ?
        <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
        <SideImg />
      </div>
      <>
      
         <div className="fixed top-0">
          <Error height="h-full" background="bg-red-800"/>
        </div>
        {/* Verification */}
        {isOwner === -1 && <div className="flex justify-center items-center">
          <div>
            <div className="flex justify-center items-center my-5">
              <Image src={LoadingIcon} alt="loading" className="animate-spin" />
            </div>

            {error ? (
              <div>
                <Error height="h-40" background="bg-red-300" />
              </div>
            ) : (
              <p className="text-center  bg-black py-2 px-4 rounded-sm text-white text-sm">
                Verifying, Please Wait ...
              </p>
            )}
          </div>
          <div className="absolute bottom-5">
            <h1>Tacky Toes {currentYear}</h1>
          </div>
        </div>}
        {/* For Owner */}
        {isOwner === 0 && <div>
            <div className="flex justify-center items-center my-5">
              <Image src={LoadingIcon} alt="loading" className="animate-spin" />
            </div>
          {!startNotificationStatus && <p>You can only start the game, if your opponent has joined</p>}
        </div>}

        {/* For the user they want to play with */}
        {isOwner === 1 && <div>
           <div className="flex justify-center items-center my-5">
              <Image src={LoadingIcon} alt="loading" className="animate-spin" />
            </div>
         <p className="text-sm">
            Please wait while the game creator proceed with the game
          </p>
        </div>}
        <div className={`notificationStyle ${notificationStyle} rounded-b-md`}>
          <p className="text-center text-white text-sm py-5 ">{opponentName} has joined</p>
          <div className="w-11/12 mx-auto flex justify-end">
            <button onClick={()=>startGameBtn()} className="bg-white w-full  h-10 rounded-md">Start</button>
          </div>
        </div>

        
       
      </>
        </div> :
     
       
        <GamePage isOwner={isOwner} />
      }
    </>
    
  );
}

export default page