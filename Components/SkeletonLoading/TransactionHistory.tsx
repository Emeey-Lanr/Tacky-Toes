const TransactionHistorySkeleton = () => {
  return (
      <div className="w-4/5 mx-auto">
          <div className="flex justify-between items-center w-full bg-gray-200">
              <div className="w-30">
                  <div className="w-30 h-20 bg-gray-400 flex justify-center items-center">
                      <div className="w-4/5 h-4 animate-pulse"></div>
                      <div className="w-10 h-10 rounded-full animate-pulse"></div>
                  </div>
                  <div className="w-full">
                      <div className="w-4/5 mx-auto h-4 my-2 bg-gray-300 animate-pulse"></div>
                      <div className="w-4/5 mx-auto h-4 my-2 bg-gray-300 animate-pulse"></div>
                  </div>
              </div>
              <div>
                  <div className="w-10 h-10 rounded-full bg-gray-400 animate-pulse"></div>
              </div>
          </div>
          
    </div>
  )
}

export default TransactionHistorySkeleton