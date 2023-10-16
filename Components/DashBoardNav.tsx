import Image from "next/image"
import logo from "../public/icon/logo.svg"
import search from "../public/icon/search.svg"
const DashBoardNav = () => {
  return (
    <div className="w-full sticky top-0">
      <div className="mx-auto py-8 w-4/5 flex justify-between items-center">
        <div>
          <Image className="w-10 h-10" src={logo} alt="logo" />
        </div>
        <div className="flex items-center ">
          <p className="px-2 font-bold">Emeey</p>
          <Image
            className="w-7 h-7 rounded-full object-cover"
            src={logo}
            alt="user-img"
          />
        </div>
      </div>
      <div className="w-11/12 ml-auto border-b border-gray-300 h-1" />
      <div className="w-3/5 flex items-center mx-auto py-8">
        <input
          type="text"
          className="h-10 rounded-l-lg w-full border border-gray-300 border-r-0"
        />
        <button className="h-10 w-12  rounded-r-lg roud bg-black flex justify-center items-center">
          <Image className="w-5 h-5" src={search} alt="search" />
        </button>
      </div>
      <div className="w-4/5 py-4 mx-auto flex justify-between items-center">
        <div className="overflow-x-scroll w-11/12  dashboard-nav-scroll">
          <button className="h-10 w-40 text-sm border  text-gray-700  border-gray-400 rounded-md hover:bg-black hover:text-white">
            Home
          </button>
          <button className="mx-3 h-10 w-40 text-sm text-gray-700  border border-gray-400 rounded-md">
            Pro
          </button>
          <button className="mx-3 h-10 w-40 text-sm  text-gray-700 border border-gray-400 rounded-md">
            Setting
          </button>
        </div>
        <div>
          <button className="h-10 w-10 text-white font-bold rounded-md bg-black flex justify-center items-center">
            <span className="w-6 h-6 border border-white flex justify-center items-center rounded bg-white text-black">
              +
            </span>
          </button>
        </div>
      </div>

      <div className="w-11/12 mr-auto border-b border-gray-300 h-1" />
    </div>
  );
}

export default DashBoardNav