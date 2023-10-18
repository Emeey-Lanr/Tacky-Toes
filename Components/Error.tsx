import { RootState } from "@/Redux/store";
import {  useSelector } from "react-redux"
const Error = ({ height}: { height: string, }) => {
    const errorMessageDetails = useSelector((state:RootState)=>state.Error.value)
    return (
      <>
            {errorMessageDetails.errorMessage !== "" &&  <div
                className={`w-full bg-red-300 flex justify-center items-center ${height}`}
            >
                <p className="text-sm text-gray-600">{errorMessageDetails.errorMessage}</p>
            </div>}
      </>
    );
}

export default Error