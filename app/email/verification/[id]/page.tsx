'use client'
import sideImg from "@/public/icon/nav-side-icon.svg"
import Image from "next/image"
import { ChangeEvent, FormEvent, useContext, useEffect, useRef } from "react"
import { appContext } from "@/appContext/MainAppContext";
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/Redux/store"
import { emailVerificationChangeDataR } from "@/Redux/Constituents/EmailVerification"
import Loading from "@/Components/Loading";
import { usePathname, useSearchParams, useRouter, } from "next/navigation";

import axios from "axios";
import Error from "@/Components/Error";
import { changeErrorMessage } from "@/Redux/Constituents/Error";

const EmailVerification = () => {
  const searchParams = useSearchParams()
   const email = searchParams.get("email");
  const router = useRouter()
  const params = usePathname()
   const { user_endpoint,clicked, setClicked} = useContext(appContext)
  const dispatch = useDispatch<AppDispatch>()
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<any>(null)
    const formDetails = useSelector((state:RootState)=>state.EmailVerification.value)
    const preventInputSubmit = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault()   
    }
  const handleForm = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    dispatch(emailVerificationChangeDataR({ id, data:`${e.target.value}`}))
  }
 
  
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    let indexChange = 0
     
    if (Number(e.target.value) > -1 && Number(e.target.value) < 10) {
      dispatch(emailVerificationChangeDataR({ id, data: `${e.target.value}` }));
     
   if ((id + 1) < 4) {
     
      const input = divRef.current?.children[id + 1];

      input.focus();
      } 
      if (e.target.value === '') {
        dispatch(emailVerificationChangeDataR({ id, data: `${e.target.value}` }));
        console.log(id)
        if ((id - 1) > -1) {
         
           const input = divRef.current?.children[id - 1];

           input.focus();
        }
      }
       
    }


  }
  const submitTokenBtn = async () => {
    try {
     setClicked(true)
      const verifyToken = await axios.put(`${user_endpoint}/verify/email/${params.split("/")[3]}`, {token:formDetails})
      localStorage.txxxx = verifyToken.data.info.token
       router.push(`/${verifyToken.data.info.username}`)
      
    } catch (error: any) {
      dispatch(changeErrorMessage(`${error.response.data.message}`))
      setClicked(false)
    }
  }
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
        <Image src={sideImg} alt="sideImage" />
      </div>
      <form
        onSubmit={(e)=>preventInputSubmit(e)}
        className="input-size border rounded-md border-gray-300"
        action=""
      >
        <div className="py-5">
          <h1 className="text-center text-gray-500 font-bold text-xl">
            Tacky Toe
          </h1>
          <p className="text-center text-light text-gray-500">
             Email Verification
          </p>
        </div>
        <div className="w-4/5 mx-auto">
          <Error height="h-8"/>
        </div>
        <div className="w-4/5 mx-auto">
          <p className="text-sm text-gray-500" >An email has been sent to <span className="text-gray-700 font-semibold">@{email }</span></p>
         </div>
              <div className="w-4/5 mx-auto mb-2">
                  
          <label className="block text-sm py-2 text-gray-500">
             Enter your email Verification code
                  </label>
                  <div ref={divRef} className="email-input-data">
                      {formDetails.map((data, id) => (
                        <input ref={inputRef} onChange={(e) => handleFormChange(e, id)} key={id} type="text" className={`i ${id} h-10 border text-center border-gray-400 flex justify-center items-center rounded-sm`} value={data !== -1 ? data : ''}/>
                    )) }
                  </div>
        
        </div>

        <div className="w-4/5 mx-auto mb-6">
          <button onClick={()=>submitTokenBtn()}
            type="submit"
            className={`w-full  text-white text-sm h-10 ${
              !clicked ? "bg-black" : "bg-white border-2 border-gray-600"
            } rounded-sm flex justify-center items-center`}
          >
            {clicked ? (
              <span>
                 <Loading loadingSize="w-4 h-4" />
              </span>
            ) : (
              <span>Access</span>
            )}
          </button>
        </div>
       
      </form>
    </div>
  );
}

export default EmailVerification