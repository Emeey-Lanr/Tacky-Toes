import Image from "next/image";
import LoadingIcon from "@/public/icon/loading.svg";
interface size {
  loadingSize: string;
}
const Loading = ({ loadingSize }: size) => {
  return (
    <Image
      src={LoadingIcon}
      className={`loading ${loadingSize}`}
      alt="loading"
    />
  );
};

export default Loading;
