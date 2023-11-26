import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
import logo from "../../assets/LogoOnly.png";
import { signUp } from "../../actions/users";
// import { selectUserInfo } from "../../components/user/userSlice";

export default function Signup() {

  const [formData, setFormData] = useState({fname:'',lname:'',email:'',password:'',confirmPassword:''})
  const dispatch = useDispatch();

  const registerHandler = (e) =>{
    e.preventDefault()
    console.log(formData)
    dispatch(signUp(formData))
  
  }


  return (
    <>
      {/* {user && <Navigate to="/" replace={true}></Navigate>} */}
    
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto w-14" src={logo} alt="Your Company" />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign Up
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              noValidate
              className="space-y-6"
              onSubmit={registerHandler}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="fname"
                    // {...register("fname", {
                    //   required: "first name is required",
                    // })}
                    onChange={(e)=>setFormData({...formData,fname:e.target.value})}
                    type="fname"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="lname"
                    // {...register("lname", {
                    //   required: "last name is required",
                    // })}
                    type="lname"
                    onChange={(e)=>setFormData({...formData,lname:e.target.value})}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    // {...register("email", {
                    //   required: "Email is required",
                    //   pattern: {
                    //     value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/,
                    //     message: "Email not valid",
                    //   },
                    // })}

                    onChange={(e)=>setFormData({...formData,email:e.target.value})}
                    type="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {/* {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )} */}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                  //   {...register("password", {
                  //     required: "Password is required",
                  //     pattern: {
                  //       value:
                  //         /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  //       message: `- At least 8 characters
                  // - Must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                  // - Can contain special characters`,
                  //     },
                  //   })}

                    onChange={(e)=>setFormData({...formData,password:e.target.value})}
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {/* {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )} */}
                </div>
              </div>

              {/* confirm password option */}

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="confirmPassword"
                    // {...register("confirmPassword", {
                    //   required: "password confirmation is required",
                    //   validate: (value, formValues) =>
                    //     value === formValues.password ||
                    //     "password not matching",
                    // })}
                    onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})}
                    type="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {/* {errors.confirmPassword && (
                    <p className="text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )} */}
                </div>
              </div>

              {/* button for submit */}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Already a member?{" "}
              <Link
                to="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
    </>
  );
}
