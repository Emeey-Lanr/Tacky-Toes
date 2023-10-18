import DashBoardNav from "@/Components/DashBoardNav"

const Dashboard = () => {
    return (
        <div>
            <DashBoardNav />
            <div className="h-grid">
                <div className="border w-full mt-4  border-gray-300 shadow-md rounded-md  py-4">
                    <div className="w-11/12  mx-auto flex justify-between items-center">
                        <div className="w-4/5">
                            <p className="text-sm text-gray-600 py-2">Game Name</p>
                            <div className="w-4/5 h-10 flex justify-center items-center  rounded-md border border-black">
                          <p className="text-sm ">Zender</p>
                            </div>
                        </div>
                        <div>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="w-11/12 mx-auto my-4">
                        <button className="w-full h-10 rounded-md bg-black text-white text-sm">Proceed to Details</button>
                    </div>

                </div>

            </div>
        
        </div>

    )
}
export default Dashboard