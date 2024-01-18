import { Dispatch, SetStateAction } from "react";

const GameInstructionModal = ({ setInstructionModalSwitch }: { setInstructionModalSwitch: Dispatch<SetStateAction<boolean>>}) => {
  return (
    <div className="w-full h-full fixed top-0 modal-bg flex justify-center items-center ">
      <div className="bg-white px-7 rounded-md pt-2 pb-5 w-96 modal:w-11/12">
        <div className="flex justify-end">
          <button
            onClick={() => setInstructionModalSwitch(false)}
            className="w-10 h-10 ml-auto border text-white  border-black bg-black hover:bg-white hover:text-black rounded-full flex justify-center items-center"
          >
            <span className="text-1xl font-medium ">X</span>
          </button>
        </div>

        <h1 className="text-center font-bold text-gray-700">Intructions</h1>
        <p className="text-sm text-gray-600 py-3">
          <span className="block w-2 h-2 bg-black rounded-md"></span> The
          creator of the game starts the game
        </p>
        <p className="text-sm text-gray-600 py-3">
          <span className="block w-2 h-2 bg-black rounded-md"></span> You're
          only entitled to 4 rounds after which the game ends
        </p>
      </div>
    </div>
  );
}

export default GameInstructionModal