'use client'
import { useFormik } from "formik"
import * as yup from "yup"
import { appContext } from "@/appContext/MainAppContext"
import { useContext, useState } from "react"
import Loading from "@/Components/Loading"
import SideImg from "@/Components/SideImg"
import axios from "axios"
import Error from "@/Components/Error"
const PasswordReset = () => {
  const { clicked, setClicked, user_endpoint, errorMessageF } = useContext(appContext)
  const [errorSuccess, setErrorSuccess] = useState("")
    const formik = useFormik({
        initialValues: {
            email_username:""
        },
        onSubmit: async () => {
          try {
              setClicked(true)
              const verifyForgotPassword = await axios.post(`${user_endpoint}/verifyForgotPassword`, {emailOrUsernameData:formik.values.email_username})
                errorMessageF(`${verifyForgotPassword.data.info}`)
              console.log(verifyForgotPassword)
              setErrorSuccess("bg-green-500")
            } catch (error: any) {
              setErrorSuccess("bg-red-500")
            errorMessageF(`${error.response.data.message}`)
            setClicked(false)
           
            }
        },
        validationSchema: yup.object({
            email_username:yup.string().required('Fill in input')
        })
    })
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
       <SideImg/>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="input-size border rounded-md border-gray-300"
        action=""
      >
        <div className="py-5">
          <h1 className="text-center text-gray-500 font-bold text-xl">
            Tacky Toe
          </h1>
          <p className="text-center text-light text-gray-500">
            Forgot Password
          </p>
        </div>
        <div className="w-4/5 mx-auto">
          <Error height="" background={errorSuccess} />
        </div>
       
        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">
            Enter your Username or Email
          </label>
          <input
            name="email_username"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full pl-2 text-sm rounded-sm h-10 border border-gray-300 ${
              formik.errors.email_username && "error-input"
            } `}
          />
          {formik.errors.email_username && (
            <p className="text-xs text-red-600">{formik.errors.email_username}</p>
          )}
        </div>

        <div className="w-4/5 mx-auto mb-6">
          <button
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
              <span>Continue</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PasswordReset