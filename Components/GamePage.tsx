import { RootState } from "@/Redux/store";
import SideImg from "./SideImg";
import { useSelector } from "react-redux/es/hooks/useSelector";
const GamePage = () => {
    const gameDetails = useSelector((state: RootState) => state.GameStarted.value)
    const playBtn = () => {
        
    }
    return (
      <div className="w-full h-full fixed flex justify-center items-center">
        <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
          <SideImg />
        </div>
        <div>
          <div className="flex justify-center absolute top-0 py-3">
            <div className="">
              <div className="flex justify-center items-center py-2">
                <div className="w-32 mx-auto flex justify-center">
                  <span className="h-8 w-8 border  text-white border-black flex justify-center items-center rounded-full bg-black">
                    {gameDetails.creatorSymbol}
                  </span>
                </div>
                <div className="w-32 mx-auto flex justify-center">
                  <span className="h-8 w-8 border text-white border-black flex justify-center items-center rounded-full bg-black">
                    {gameDetails.versusSymbol }
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="px-6 py-1 bg-black flex justify-center items-center">
                  <span className="text-white text-1xl font-bold">{gameDetails.creator}</span>{" "}
                  <span className="text-white font-bold px-2 ">-</span>
                  <span className="text-white text-3xl font-bold">{gameDetails.creatorScore}</span>
                </div>
                <div className="px-4">
                  <span className="text-4xl font-bold">VS</span>
                </div>
                <div className="px-6 py-1 bg-black flex justify-center items-center">
                  <span className="text-white text-1xl font-bold">{gameDetails.versus}</span>{" "}
                  <span className="text-white font-bold px-2 ">-</span>
                  <span className="text-white text-3xl font-bold">{gameDetails.versusScore }</span>
                </div>
              </div>
            </div>
            <div></div>
            {/* <div className="">
            <div className="flex justify-center items-center py-2">
              <span className="h-8 w-8 border text-white border-black flex justify-center items-center rounded-full bg-black">
                O
              </span>
            </div>
          </div> */}
          </div>
          <div className="flex justify-center items-center relative">
            <div className="tick-tack-toe_p_div">
          
              {gameDetails.game.map((value, id: number) => (
                <div
                  key={id}
                  onClick={() => playBtn()}
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
            {/* top, bottom, left, right, middle */}
            {/* <div className="cross-tm"></div>
          <div className="cross-m"></div>
          <div className="cross-bm"></div>
          <div className="cross-l"></div>
          <div className="cross-lmr"></div>
          <div className="cross-r"></div>
          <div className="cross-cr"></div>
          <div className="cross-cl"></div> */}
          </div>
        </div>
      </div>
    );
}
export default GamePage