'use client'
import {useFormik} from "formik"
import * as yup from "yup"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import Loading from "@/public/icon/loading.svg"
import { appContext } from "@/appContext/MainAppContext";
import { useContext } from "react";
const Signin = () => {
  const {errorMessageF} = useContext(appContext)
  const [clicked, setClicked] = useState<boolean>(false)
  const formik = useFormik({
    initialValues: {
      username_email: "",
      password:""
    },
    onSubmit: () => {
      setClicked(true)
    },
    validationSchema: yup.object({
      username_email: yup.string().trim().required("Fill in input"),
      password:yup.string().trim().required("Fill in input")
    })
  })
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black"></div>
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
            Login Into Account
          </p>
        </div>

        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">
            Username/Email
          </label>
          <input
            name="username_email"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full pl-2 text-sm rounded-sm h-10 border border-gray-300 ${
              formik.errors.username_email && "error-input"
            } `}
          />
        </div>

        <div className="w-4/5 mx-auto">
          <label className="block text-sm py-1 text-gray-500">Password</label>
          <input
            onChange={formik.handleChange}
            type="password"
            onBlur={formik.handleBlur}
            name="password"
            className={`w-full pl-2 text-sm rounded-sm h-10 border border-gray-300 ${
              formik.errors.password && "error-input"
            }`}
          />
        </div>
        <div className="w-4/5 py-2 mx-auto flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Don't have an account ?</p>
          </div>
          <div>
            <Link
              href="/signup"
              className="border px-4 text-sm font-bold border-gray-300 rounded-sm w-20  h-7"
            >
              Create
            </Link>
          </div>
        </div>
        <div className="w-4/5 mx-auto mb-6">
          <button
            type="submit"
            className={`w-full  text-white text-sm h-10 ${!clicked ? 'bg-black' :'bg-white border-2 border-gray-600'} rounded-sm flex justify-center items-center`}
          >
           {clicked ? <span>
              <Image src={Loading}  className="loading w-4 h-4" alt=""/>
             </span> :
            <span>Access</span> }
          </button>
        </div>
        <div className="w-4/5 mb-3 mx-auto flex justify-center items-center">
          <div className="h-10 w-10 flex justify-center items-center rounded-sm border border-gray-300">
            <p className="text-xl font-extrabold">G</p>
          </div>
          <p className="px-2 text-xs text-gray-400">Signup with google </p>
        </div>
      </form>
    </div>
  );
}

export default Signin