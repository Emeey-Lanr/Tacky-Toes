"use client"
import DashBoardNav from "@/Components/DashBoardNav"
import { useFormik } from "formik"
import * as yup from "yup"
import axios from "axios"
import Image from "next/image"
import linkIcon from "@/public/icon/link-icon.svg"
import loading from "@/public/icon/loading.svg"
import  {useSelector, useDispatch} from "react-redux"
import { RootState, AppDispatch } from "@/Redux/store"
import { phaseCreationChangeR } from "@/Redux/Constituents/CreateGame"
import { useRef } from "react"

const CreateGameBoard = () => {
  const gameCreationRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const createGameInfo = useSelector((state: RootState) => state.CreateGame.value)
  
  const changeState = (loading:number, phase_text:string, player_name:string, game_name:string, game_link:string) => {
       dispatch(
         phaseCreationChangeR({loading, phase_text, player_name, game_name,game_link })
       );
    
  }
    const formik = useFormik({
      initialValues: {
        game_name: "",
        player_username:"",
      },
        onSubmit: async() => {
          try {
            gameCreationRef.current?.scrollIntoView()
            changeState(1, "Creating Game", "", "", "");
            const createGameAPIRoute = await axios.post("/", {
              formPayload: formik.values,
            });
          } catch (error) {
           changeState(3, ``, "","", "" ) 
          }
      },
        validationSchema: yup.object({
            game_name: yup.string().trim().required('Fill in Input'),
            player_username:yup.string().trim().required('Fill In Input')
      }),
    });
  return (
    <div className="w-full">
      <DashBoardNav />
      <div className="w-4/5 pb-4  border border-gray-300 mx-auto mt-10 rounded-t-xl">
        <form onSubmit={formik.handleSubmit} className="w-4/5 mx-auto pb-20 ">
          <div className="pt-10 pb-3">
            <h1 className="text-lg font-bold">Create Game</h1>
          </div>
          <div className="mb-6">
            <label htmlFor="" className="block text-sm py-1">
              Game Name
            </label>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              name="game_name"
              className={`w-full h-10 pl-2 texts-sm rounded-md border broder-gray-300 ${
                formik.errors.game_name && "error-input"
              } `}
            />
            {formik.errors.game_name && (
              <p className="pt-1 text-xs text-red-600 ">
                {formik.errors.game_name}
              </p>
            )}
          </div>
          <div className="mb-10">
            <label htmlFor="" className="block text-sm py-1">
              Player's Username
            </label>
            <input
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="player_username"
              className={`w-full h-10 pl-2 texts-sm rounded-md border broder-gray-300 ${
                formik.errors.player_username && "error-input"
              } `}
            />
            {formik.errors.player_username && (
              <p className="pt-1 text-xs text-red-600 ">
                {formik.errors.player_username}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full h-10 bg-black rounded-md text-white"
            >
              Create
            </button>
          </div>
        </form>
        {createGameInfo.loading > 0 && (
          <div className="w-4/5 py-6 mx-auto border border-gray-200 rounded-md">
            <div className="py-4">
              <h1 className="text-center">{createGameInfo.phase_text}</h1>
            </div>

            {/* Creating Game */}
            {createGameInfo.loading === 1 && (
              <div className="w-4/5 mx-auto  flex justify-center items-center h-24">
                <Image className="loading" src={loading} alt="" />
              </div>
            )}

            {/* Game created Succesfully */}
            {createGameInfo.loading === 2 && (
              <div className="w-full">
                <div className="w-4/5 py-4 mx-auto flex justify-between items-center">
                  <div className="w-2/5">
                    <p className="py-1 text-sm text-gray-600">Game Name</p>
                    <div className="h-10 w-full bg-black rounded-md text-sm text-white">
                      <p></p>
                    </div>
                  </div>
                  <div className="w-2/5">
                    <p className="py-1 text-sm text-gray-600">Player's Name</p>
                    <div className="h-10 w-full bg-black rounded-md text-sm text-white">
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="flex  justify-center items-center py-6">
                  <div>
                    <Image className="h-5 w-5" src={linkIcon} alt="" />
                  </div>
                  <p className="text-sm px-3 text-gray-800">
                    http://localhost:3000/emeey/play/tunde/473474747
                  </p>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <button className="text-white text-sm h-10 w-1/4 bg-black rounded-md ">
                    proceed to dashboard
                  </button>
                </div>
              </div>
            )}

            {/* Unable to create game, error */}
            {createGameInfo.loading === 3 && (
              <div className="w-8/12  h-24 mx-auto  rounded-md bg-red-300 flex justify-center items-center">
                <p className="text-sm text-gray-600 ">
                  Unable to create, an error occured
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div ref={gameCreationRef}  />
    </div>
  );
}

export default CreateGameBoard