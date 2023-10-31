const ProfileSkeleton = () => {
  return (
    <div className="w-4/5 mx-auto border border-gray-300 mt-10 py-9 bg-white ">
      <div className="w-4/5 mx-auto flex justify-center items-center">
        <div className="w-44 h-44  rounded-md flex justify-center items-center bg-gray-300  animate-pulse"></div>
      </div>
      <div className="w-4/5 mx-auto rounded-md h-10 bg-gray-300 my-4 flex items-center animate-pulse"></div>
      <div className="w-4/5 mx-auto rounded-md h-10 bg-gray-300 my-4 flex items-center animate-pulse"></div>
      <div className="w-4/5 mx-auto rounded-md h-10 bg-gray-300 my-4 flex items-center animate-pulse"></div>
      <div className="w-4/5 mx-auto rounded-md h-10 bg-gray-300 my-4 flex items-center animate-pulse"></div>
      <div className="w-4/5 mx-auto rounded-md h-10 bg-gray-300 my-4 flex items-center animate-pulse"></div>
    </div>
  );
}

export default ProfileSkeleton