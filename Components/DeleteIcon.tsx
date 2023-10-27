import Image from "next/image"
import deleteImg from "@/public/icon/delete.svg"
interface WidthAndSize{
    width: string,
    height:string,
}

const DeleteIcon = ({width, height}:WidthAndSize) => {
  return (
     <Image src={deleteImg} className={`${width} ${height}`} alt=""/>
  )
}

export default DeleteIcon