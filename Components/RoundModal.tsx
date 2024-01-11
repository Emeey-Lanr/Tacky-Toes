
interface RoundModalInterface {
    modalSwitch: boolean;
    winner:string;
    round: number;

}
const RoundModal = ({modalSwitch, winner, round}:RoundModalInterface) => {
    return (
      <>
        {modalSwitch && (
          <div className="w-full h-full fixed top-0 bg-white flex justify-center items-center">
            <div>
              <div>
                <p className="text-center text-gray-900">
                  {" "}
                  <span className="text-5xl font-medium">
                    {" "}
                    Round
                  </span> <br />{" "}
                </p>
                <div className="rounded-full h-12 w-12 bg-black flex justify-center items-center mx-auto my-4">
                  <span className="text-white  flex justify-center items-center">
                    {round}
                  </span>
                </div>
              </div>

              <p className="text-center py-4 text-2xl font-bold ">
                <span>{winner}</span> 
              </p>
            </div>
          </div>
        )}
      </>
    );
}

export default RoundModal