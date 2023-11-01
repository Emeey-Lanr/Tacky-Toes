import { RootState } from "@/Redux/store";
import {  useSelector } from "react-redux"
const Error = ({ height, background}: { height: string, background:string }) => {
    const errorMessageDetails = useSelector((state:RootState)=>state.Error.value)
    return (
      <>
            {errorMessageDetails.errorMessage !== "" &&  <div
                className={`w-full ${background} flex justify-center items-center py-2 ${height}`}
            >
                <p className="text-sm text-gray-600">{errorMessageDetails.errorMessage}</p>
            </div>}
      </>
    );
}

export default Error