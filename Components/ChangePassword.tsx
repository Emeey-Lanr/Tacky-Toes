import { useFormik } from "formik";
import * as yup from "yup"
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { appContext } from "@/appContext/MainAppContext";
import { useContext } from "react";
const ChangePassword = () => {
    const { openProfileModal } = useContext(appContext);
 const profileModalDetails = useSelector(
   (state: RootState) => state.ProfileModal.value
 );
    const formik = useFormik({
        initialValues: {
                old_Password:"",
            new_password: ""
        
        },
        onSubmit: () => {
            
        },
        validationSchema: yup.object({
            old_password:yup.string().trim().min(6, 'Password must be aleast 6 characters').required('Fill in input'),
            new_password:yup.string().trim().min(6, 'Password must be aleast 6 characters').required('Fill in input')
        })
    })
    return (
      <>
        {profileModalDetails.modalNumber === 1 && (
          <div className="w-full h-full modal-bg fixed top-0 flex justify-center items-center">
            <div className="bg-black input-size py-8 rounded-md">
              <form onSubmit={formik.handleChange} className="w-full">
                <div className=" w-11/12 flex justify-end items-center">
                  <button
                    onClick={() => openProfileModal(0)}
                    className="h-6 w-6 text-gray-200 flex justify-center items-center rounded-full border border-gray-200"
                  >
                    x
                  </button>
                </div>
                <div className="w-4/5 mx-auto">
                  <h1 className="font-bold text-gray-100">Change Password</h1>
                  <p className="text-xs py-1 text-gray-200">
                    Fill in input to change password.
                  </p>
                </div>
                <div className="w-4/5 mx-auto my-3">
                  <label className="block text-gray-200 text-sm py-1">
                    Old Password
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full bg-black px-2 text-gray-100 h-10 border border-gray-400 rounded-md"
                    type="password"
                    name="old_password"
                  />
                  {formik.errors.old_Password && (
                    <p className="text-xs text-red-600">
                      {formik.errors.old_Password}
                    </p>
                  )}
                </div>
                <div className="w-4/5 mx-auto my-3">
                  <label className="block text-gray-200 text-sm py-1">
                    New Password
                  </label>
                  <input
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full bg-black px-2 text-gray-100 h-10 border border-gray-400 rounded-md"
                    type="password"
                    name="new_password"
                  />
                  {formik.errors.new_password && (
                    <p className="text-xs text-red-600">
                      {formik.errors.new_password}
                    </p>
                  )}
                </div>
                <div className="w-4/5 mx-auto">
                  <button
                    type="submit"
                    className="h-10 w-full rounded-md bg-white"
                  >
                    change
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
}

export default ChangePassword