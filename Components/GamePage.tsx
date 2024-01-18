import { RootState } from "@/Redux/store";
import SideImg from "./SideImg";
import { useSelector, useDispatch } from "react-redux";
import { useSocket } from "@/socket";
import { useState, useEffect, useContext } from "react"
import { collectDetails,inputDataR } from "@/Redux/Constituents/GameStarted";
import RoundModal from "./RoundModal";
import GameInstructionModal from "./GameInstructionModal";
import Error from "./Error";
import { appContext } from "@/appContext/MainAppContext";
import FinalGameModal from "./FinalGameModal";
const GamePage = ({ isOwner }: { isOwner: number }) => {
  const {socket} = useSocket()
  const dispatch = useDispatch()
  const {errorMessageF} = useContext(appContext)
  const gameDetails = useSelector((state: RootState) => state.GameStarted.value)

  // this will be used when someone clicks, he or she will be able to click
  // untill a socket is being 0on to make it false to aviod over playing
  const [playingControl, setPlayingControl] = useState<boolean>(false)
  // 0 for owner
  // 1 for notOwner
  const [roundModalSwitch, setRoundModalSwitch] = useState(false)
  const [instructionModalSwitch, setInstructionModalSwitch] = useState<boolean>(true)
  const [strokeStyle, setStrokeStyle] = useState("")
  const [winDrawStatement, setWinDrawStateMent] = useState<string>("")
  const [finalGameModalSwitch, setFinalGameModalSwitch] = useState<boolean>(false)
  
  const noWinnerContinueS = () => {
    socket?.on("continueGame", (data) => {
      setPlayingControl(false)
      dispatch(collectDetails(data.gameInfo))

    });
  }
  
  const whenTimeOut = (gameInfo:any) => {
     setTimeout(() => {
            dispatch(collectDetails(gameInfo))
             setStrokeStyle("")  
         setPlayingControl(false)
        }, 2000)
  }
  const modalSwitchTimeOut = (time:number, switchS:boolean, winnerDraw:string) => {
     setTimeout(() => {
       setRoundModalSwitch(switchS);
       setWinDrawStateMent(winnerDraw)
     }, time);
  }
  const winDrawS = () => {
    socket?.on("checkWinnerDraw", (data:any) => {
      if (data.winnerChecker.winner) {
        // stroke style
        setStrokeStyle(`${data.winnerChecker.position}`)
          modalSwitchTimeOut(1000, true, `${data.gameInfo[`${data.winnerChecker.winnerSign === "X" ? 'creator':'versus'}`]} won`);
          modalSwitchTimeOut(2000, false, "");
        whenTimeOut(data.gameInfo)
        if (data.gameInfo.round === 5) {
          setTimeout(() => {
            setFinalGameModalSwitch(true)
          },3000)
        }
      
      } else {
        // when there is a draw
        setRoundModalSwitch(true)
          modalSwitchTimeOut(1000, true, "It's a draw");
          modalSwitchTimeOut(2000, false, "");
        whenTimeOut(data.gameInfo)
        if (data.gameInfo.round === 5) {
          setTimeout(() => {
            setFinalGameModalSwitch(true)
          },3000)
          
        }

      }
     

    });
  }
  useEffect(() => {
    noWinnerContinueS()
    winDrawS()
  },[])







  const playSocket = (signatureSign: string, isOwner: number, arrayPositionId: number) => {
    dispatch(inputDataR({ id: arrayPositionId, value: signatureSign }));
       setPlayingControl(true);
    socket?.emit("playGame", {signatureSign, arrayPositionId, isOwner, creator:gameDetails.creator, versus:gameDetails.versus, socketId:gameDetails.creatorVersusId, gameId:gameDetails.gameId})
  }
  const verify = (signatureSign: string, isOwner: number, arrayPositionId: number) => {
    // to check if someone who just played is trying to play agin
     if ((isOwner === 0 || isOwner === 1) && gameDetails.whoPlayedLast.length > 0 && gameDetails.whoPlayedLast[gameDetails.whoPlayedLast.length - 1] !== signatureSign) {
        playSocket(signatureSign, isOwner, arrayPositionId)
     } else {
       errorMessageF("You'v played already, so, you can't play again");
       setTimeout(() => {
         errorMessageF("")
       },1500)
   
    }
  }
const playBtn = (id: number) => {
  let signatureSign = isOwner === 0 ? "X" : "O"
// the conditional statement is to prevent a box that has x or o from being interchanged
  if (!playingControl && gameDetails.game[id] !== "X" && gameDetails.game[id] !== "O") {
    // to check if the owner is the first person playing cause it has been structured that way
    if (isOwner === 0 && gameDetails.whoPlayedLast.length < 1) {
      playSocket(signatureSign, isOwner, id);
    } else if (gameDetails.whoPlayedLast.length > 0) {
      verify(signatureSign, isOwner, id);
     
    } else {
        errorMessageF("The owner of the game is meant to start the game");
       setTimeout(() => {
         errorMessageF("");
       }, 1500);
    
    
    }
    
  }    
 
    
 }
  return (
    <>
      <div className="w-full h-full fixed flex justify-center items-center">
        <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
          <SideImg />
        </div>
        <div>
          <div className="flex justify-center absolute top-0 py-3 modal:left-0 modal:right-0">
            <div className="">
              <div className="bg-black h-12  w-96 flex justify-between items-center rounded-full modal:w-72">
                <div className="w-1/3 relative flex items-center justify-between">
                  <div className="h-11 w-11 bg-black border border-white text-white  flex justify-center items-center">
                    <span className="text-2xl font-bold">
                      {gameDetails.creatorScore}
                    </span>
                  </div>

                  <div className="">
                    <div className="w-full">
                      <p className="text-white text-sm font-bold w-14 overflow-x-hidden text-ellipsis mx-auto">
                        {gameDetails.creator}
                      </p>
                      <span
                        style={{ marginBottom: "-30px" }}
                        className="w-full font-bold bg-white rounded-sm border border-black flex justify-center items-center"
                      >
                        {gameDetails.creatorSymbol}
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" w-1/4 bg-white h-14 border border-black rounded-md flex justify-center items-center">
                  <span className="text-5xl ">{gameDetails.round}</span>
                </div>
                <div className="w-1/3 relative flex items-center justify-between">
                  <div className="">
                    <div>
                      <p className="text-white text-sm font-bold w-14 overflow-x-hidden text-ellipsis mx-auto">
                        {gameDetails.versus}
                      </p>
                      <span
                        style={{ marginBottom: "-30px" }}
                        className="w-full font-bold bg-white rounded-sm border border-black flex justify-center items-center"
                      >
                        {gameDetails.versusSymbol}
                      </span>
                    </div>
                  </div>

                  <div className="h-11 w-11 bg-black border border-white text-white flex justify-center items-center">
                    <span className="text-2xl font-bold">
                      {gameDetails.versusScore}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed bottom-10 modal:w-11/12 modal:mx-auto">
              <Error height="h-6" background="bg-red-700" />
            </div>
          </div>
          <div className="flex justify-center items-center relative ml-12 modal:ml-0">
            <div className="tick-tack-toe_p_div">
              {gameDetails.game.map((value, id: number) => (
                <div
                  key={id}
                  onClick={() => playBtn(id)}
                  className={`box-${id} flex justify-center items-center`}
                >
                  {
                    <p className="text-4xl font-bold">
                      {value == "X" || value == "O" ? value : ""}
                    </p>
                  }
                </div>
              ))}
            </div>

            <div className={`stroke-${strokeStyle}`}></div>
          </div>
          {playingControl && (
            <div className="flex justify-center mt-10">
              <div className="gameSendingIndicator">
                <span></span>
              </div>
            </div>
          )}
        </div>
      </div>
      <RoundModal
        modalSwitch={roundModalSwitch}
        winner=""
        round={gameDetails.round}
      />
      {instructionModalSwitch && (
        <GameInstructionModal
          setInstructionModalSwitch={setInstructionModalSwitch}
        />
      )}
      {finalGameModalSwitch && <FinalGameModal isOwner={isOwner} />}
    </>
  );
}
export default GamePage