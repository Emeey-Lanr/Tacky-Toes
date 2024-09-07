const DashboardLoading = () => {
  return (
    <div className="w-4/5 mx-auto dash-home-skeleton">
      <div className="h_loading my-4 px-4 bg-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="w-4/5">
            <div className="w-2/4 h-4 bg-gray-300 my-3 "></div>
            <div className="w-4/4 h-9 bg-gray-300 animate-pulse"></div>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="py-5 w-full">
          <div className="w-full mx-auto h-10 rounded-md bg-gray-300 animate-pulse"></div>
        </div>
      </div>
      <div className="h_loading my-4 px-4 bg-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="w-4/5">
            <div className="w-2/4 h-4 bg-gray-300 my-3 animate-pulse"></div>
            <div className="w-4/4 h-9 bg-gray-300 animate-pulse"></div>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="py-5 w-full">
          <div className="w-full mx-auto h-10 rounded-md bg-gray-300 animate-pulse"></div>
        </div>
      </div>
      <div className="h_loading my-4 px-4 bg-gray-200 rounded-md">
        <div className="flex justify-between items-center">
          <div className="w-4/5">
            <div className="w-2/4 h-4 bg-gray-300 my-3 animate-pulse"></div>
            <div className="w-4/4 h-9 bg-gray-300 animate-pulse"></div>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
          </div>
        </div>
        <div className="py-5 w-full">
          <div className="w-full mx-auto h-10 rounded-md bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoading;
