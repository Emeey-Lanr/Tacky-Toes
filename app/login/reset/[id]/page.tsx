'use client'
import { useFormik } from "formik"
import * as yup from "yup"
import { appContext } from "@/appContext/MainAppContext";
import { useContext, useEffect, useReducer, useState } from "react";
import Loading from "@/components/Loading";
import SideImg from "@/components/SideImg";
import axios from "axios";
import { useParams } from "next/navigation";
import Error from "@/components/Error";
const ResetPassword = () => {
  const { clicked, setClicked, user_endpoint,buttonNavigation, errorMessageF} = useContext(appContext);
  const params = useParams()
  const [phase, setPhase] = useState(false)
  const [emailUsername, setEmailUsername] = useState({email:"", username:""})
  const verifyToken = () => {
    axios.get(`${user_endpoint}/verifyFogotPasswordToken`, {
      headers: {
        Authorization:`bearer ${params.id}`,
        Accept:"application/json",
        "Content-Type":"application/json",
      },
      

    }).then((result) => {
      setEmailUsername(result.data.info)
      setPhase(true)
    }).catch((error) => {
     errorMessageF(`${error.response.data.message}`)
      setPhase(false)
    })
  }
  useEffect(() => {
    verifyToken()
  },[])
        const formik = useFormik({
          initialValues: {
            password: "",
          },
          onSubmit: async() => {
              try {
                setClicked(true)
                 const enterNewPassword = await axios.put(`${user_endpoint}/newForgotPassword`, {userDetails:emailUsername, password:formik.values.password})
                  buttonNavigation("signin")
                } catch (error) {
                
              }
          },
          validationSchema: yup.object({
            password: yup.string().min(6, 'Password must be aleast 6 characters').required("Fill in input"),
          }),
        });
  return (
    <>
      {!phase ? (
        <div className="w-full h-full fixed grid place-content-center">
          <div>
            <svg
              className="animate-rotate"
              width="51"
              height="51"
              viewBox="0 0 51 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.343262 13.5911L50.3433 13.5911M0.343262 33.2492H50.3433M13.2978 0.343262L13.2978 50.3433M33.5251 0.343262V50.3433"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
            <div>
              <Error height="" background="bg-red-600"/>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full fixed flex justify-center items-center">
          <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
            <SideImg />
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
                Reset Password
              </p>
            </div>
            <div className="w-4/5 mx-auto mb-2">
              <label className="block text-sm py-1 text-gray-500">
                Enter a new password
              </label>
              <input
                name="password"
                type="text"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className={`w-full pl-2 text-sm rounded-sm h-10 border border-gray-300 ${
                  formik.errors.password && "error-input"
                } `}
              />
              {formik.errors.password && (
                <p className="text-xs text-red-600">{formik.errors.password}</p>
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
      )}
    </>
  );
}

export default ResetPassword