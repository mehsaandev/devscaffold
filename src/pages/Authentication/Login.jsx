import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import logo from '../../assets/LogoOnly.png'
import { signIn } from "../../actions/users";
import { Button, TextField } from "@mui/material";
// import { selectError } from "../authSlice";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  //   const error = useSelector(selectError);
  //   const user = useSelector(selectloggedInUserToken);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  //   console.log(errors);

  const signInHandler = (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(signIn(formData,navigate,setLoading))

  }

  return (
    <>
      {/* {user && <Navigate to="/" replace={true}></Navigate>} */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto w-14 "
            src={logo}
            alt="Your Company"

          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"

            // onSubmit={handleSubmit((data) => {
            //   dispatch(
            //     loginUserAsync({ email: data.email, password: data.password })
            //   );
            //   console.log(data);
            // })}
            onSubmit={signInHandler}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <TextField
                  size="small"
                  id="email"
                  name="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  // {...register("email", {
                  //   required: "email is required",
                  //   pattern: {
                  //     value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  //     message: "email not valid",
                  //   },
                  // })}
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
                <TextField
                  id="password"
                  size="small"
                  // {...register("password", {
                  //   required: "password is required",
                  // })}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {/* {errors.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )} */}
                 <div className="text-sm text-end mt-2">
                  <Link
                    to='/forgot-password'
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >

                    Forgot password?
                  </Link >

                </div>
              </div>
              {/* {error && <p className="text-red-500">{error || error.message}</p>} */}
            </div>

            <div>
              <Button
              variant="contained"
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               {loading ? 'Signing In...' : 'Sign in'}
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
