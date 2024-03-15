

const Home = () => {
  return (
    <div className="w-full h-full fixed top-0 flex justify-center items-center">
      <div>
        <div className="w-full flex justify-center">
          <svg
            className="py-5"
            width="51"
            height="51"
            viewBox="0 0 51 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.343262 13.5911L50.3433 13.5911M0.343262 33.2492H50.3433M13.2978 0.343262L13.2978 50.3433M33.5251 0.343262V50.3433"
              stroke="black"  
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="w-full">
      <p className="text-2xl  text-gray-800 font-medium text-center">Tacky Toes</p> <br />
        
        </div>
        <div>
          <button className="w-32 h-10 border border-gray-600">Play</button>
          <button className="w-32 h-10 border border-gray-600">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Home