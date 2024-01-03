"use client"
import SideImg from "@/Components/SideImg";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Game = () => {
    const gameDetails = useSelector((state:RootState)=>state.GameStarted.value)
 const playBtn = (id:number)=>{

 }
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
        <SideImg />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="">
            <span>Emeey</span>
          </div>
          <div className="">
            <span>Emeey</span>
          </div>
        </div>
        <div className="flex justify-center items-center relative">
        <div className="tick-tack-toe_p_div">
          {gameDetails.game.map((value, id:number) => (
            <div key={id} onClick={()=>playBtn(id)} className={`box-${id} flex justify-center items-center`}>
              <p className="text-4xl font-bold">{value}</p>
            </div>
          ))}
        </div>
        {/* top, bottom, left, right, middle */}
        <div className="cross-tm"></div>
        <div className="cross-m"></div>
        <div className="cross-bm"></div>
        <div className="cross-l"></div>
        <div className="cross-lmr"></div>
        <div className="cross-r"></div>
        <div className="cross-cr"></div>
        <div className="cross-cl"></div>
      </div>
      </div>
    
    </div>
  );
}

export default Game