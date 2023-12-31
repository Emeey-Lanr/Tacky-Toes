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

const page = () => {
  const { socket } = useSocket();

  const { play_game_endpoint, buttonNavigation, responseF } = useContext(appContext);
  const params = useParams();
  const date = new Date();
  const [currentYear, setCurrentYear] = useState(`${date.getFullYear()}`);
  const [error, setError] = useState<boolean>(false);

  const [isOwner, setIsOwner] = useState<number>(-1);
  // -1 on verifying state
  // 0 for owner
  // 1 for notowner
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
      console.log(verify.data)
      if (verify.data.info.isOwner) {
        setIsOwner(0)
      }else{
        setIsOwner(1)
      }
    } catch (error: any) {
      if (error.response.data.message === "Redirect-To-Login") {
         localStorage.gameRoute = `${params.dashboard}/play/${params.username}/${params.id}`   
        localStorage.loginToGame = true
          buttonNavigation("signin")
      } else {
        responseF(`${error.response.data.message}`, `bg-red-300`); 
      }
       
        console.log(error);
    }
  };

  useEffect(() => {
    console.log(params);
    socket?.on("id", (data: any) => {
      console.log(data);
    });
    socket?.emit("Hello", { name: "Emeey" });
    verifyUser();
  }, []);
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
        <SideImg />
      </div>
      <>
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
          <p>Owner</p>
        </div>}

        {/* For the user they want to play with */}
        {isOwner === 1 && <div>
        <p>Player</p>
        </div>}
       
      </>
    </div>
  );
}

export default page