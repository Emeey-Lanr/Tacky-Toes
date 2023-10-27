import DashBoardNav from "@/Components/DashBoardNav"

const Pro = () => {
    return (
      <div>
        <DashBoardNav />
        <div>
          <div className="w-4/5 mx-auto mt-3">
            <span className="text-2xl font-bold block">Note:</span>
            <span className="text-sm text-gray-500">
              There's no auto renewal for any subscription made. Your
              subscription gets terminated after exceeding the subscription
              date. You will get a notification when your subscription is about
              to end
            </span>
          </div>
          <div className="w-4/5 mx-auto pro mt-8">
            <div className="w-full bg-black py-3  mb-4 rounded-md shadow-md">
              <div className="px-1 rounded-md flex justify-around items-center py-2">
                {/* <div className="w-full"> */}
                <h1 className="text-white text-center text-4xl font-medium">
                  1 Month
                </h1>
                {/* </div> */}

                <span className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-3xl font-bold">
                  $1
                </span>
              </div>
              <div className="w-4/5 mx-auto">
                <button className="px-1  w-full h-10 bg-white rounded-md  font-bold">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="w-full bg-black py-3 rounded-md shadow-md">
              <div className="px-1 rounded-md flex justify-around items-center py-2">
                {/* <div className="w-full"> */}
                <h1 className="text-white text-center text-4xl font-medium">
                  A Year
                </h1>
                {/* </div> */}

                <span className="w-20 h-20 rounded-full bg-white flex justify-center items-center text-3xl font-bold">
                  $9
                </span>
              </div>
              <div className="w-4/5 mx-auto">
                <button className="px-1  w-full h-10 bg-white rounded-md  font-bold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Pro