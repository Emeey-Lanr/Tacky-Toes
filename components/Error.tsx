import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
const Error = ({
  height,
  background,
}: {
  height: string;
  background: string;
}) => {
  const errorMessageDetails = useSelector(
    (state: RootState) => state.Error.value
  );
  return (
    <>
      {errorMessageDetails.errorMessage !== "" && (
        <div
          className={`w-full ${background} flex justify-center items-center py-4 px-2 rounded-md ${height}`}
        >
          <p className="text-sm text-white">
            {errorMessageDetails.errorMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default Error;
