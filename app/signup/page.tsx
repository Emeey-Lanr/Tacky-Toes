"use client"
import Link from "next/link";
import {useFormik} from "formik"
import * as yup from "yup"
import Error from "@/Components/Error";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/store";
import { appContext } from "@/appContext/MainAppContext";
import { useContext } from "react";
import Image from "next/image";
import sideImg from "@/public/icon/nav-side-icon.svg";
const Signup = () => {
  const {errorMessageF} = useContext(appContext)
const dispatch = useDispatch<AppDispatch>()
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      phonenumber: -1,
      password:''
    },
    onSubmit: async () => {
      try {
            console.log(formik.values);
        // const createAccount = await axios.post("/", formik.values)
        
      } catch (error) {
         
      }
   
       
    },
    validationSchema: yup.object({
      email: yup.string().email('Enter a valid email').required("Email is required"),
      username: yup.string().trim().required('Username is required'),
      phonenumber: yup.number().required().min(10, 'Inavlid Phone number'),
      password:yup.string().required('Password is required').min(6)
    })

  })
  return (
    <div className="w-full h-full fixed flex justify-center items-center">
      <div className="w-40 h-full fixed left-0  bg-black dashboardNav:hidden">
        <Image src={sideImg} alt="sideImage" />
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
            Create An Account
          </p>
        </div>
        <div className="w-4/5">
          <Error height="h-4" />
        </div>
        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">Email</label>

          <input
            name="email"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full pl-2 text-sm rounded-sm h-10 border border-gray-300  ${
              formik.errors.email && "error-input"
            }`}
          />
          {formik.errors.email && (
            <p className="text-xs  text-red-600">{formik.errors.email}</p>
          )}
        </div>
        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">Username</label>
          <input
            name="username"
            type="text"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            className={`w-full pl-2 text-sm rounded-sm h-10 border border-gray-300 `}
          />
        </div>

        <div className="w-4/5 mx-auto mb-2">
          <label className="block text-sm py-1 text-gray-500">
            Phone-number
          </label>
          <input
            type="number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="phonenumber"
            className={`w-full   pl-2 text-sm rounded-sm h-10 border border-gray-300 ${
              formik.errors.phonenumber && "error-input"
            }`}
          />
          {formik.errors.phonenumber && (
            <p className="text-xs  text-red-600">{formik.errors.phonenumber}</p>
          )}
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
          {formik.errors.password && (
            <p className="text-xs text-red-600">{formik.errors.password}</p>
          )}
        </div>
        <div className="w-4/5 py-2 mx-auto flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Already got an account ?</p>
          </div>
          <div>
            <Link
              href="/signin"
              className="border px-4 text-sm font-bold border-gray-300 rounded-sm w-20  h-7"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="w-4/5 mx-auto mb-6">
          <button
            type="submit"
            className="w-full text-white text-sm h-10 bg-black rounded-sm"
          >
            Create
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

export default Signup