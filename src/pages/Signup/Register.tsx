import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import useRegister from "../../hooks/useRegister";
import useSweetAlert from "../../hooks/useSweetAlert";

type Props = {};

// Register Interface
interface regUser {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  gender: string | number | readonly string[] | undefined;
  age: number;
  profile_picture: File | null;
  marital_status: string | number | readonly string[] | undefined;
  phoneno: number | null;
}

const initialUser: regUser = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  profile_picture: null,
  password_confirmation: "",
  marital_status: "",
  gender: "",
  age: 0,
  phoneno: null,
};

const Register: React.FC<Props> = () => {
  // hooks
  const [option, setOption] = useState<
    string | number | readonly string[] | undefined
  >(undefined);
  const [user, setUser] = useState<regUser>(initialUser);
  const { handleRgister, error, isLoading, isAuthenticated} = useRegister();
  const  {ShowAlert } = useSweetAlert();
  // Handle form submission
  const registerHandler = async(e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    const {
      password,
      password_confirmation,
      email,
      first_name,
      last_name,
      age,
      gender,
      marital_status,
      profile_picture,
    } = user;
    if (
      first_name &&
      last_name &&
      email &&
      password &&
      password_confirmation &&
      gender &&
      marital_status !== "" &&
      age !== 0 &&
      profile_picture !== null
    ) {
       const response: never | unknown = await handleRgister(user);
       if(response){

       }
    }
  };

  const chnageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files, name, value } = e.target;
    if (e.target.type === "file") {
      if (files && files?.length > 0) {
        setUser({ ...user, [name]: files?.[0] });
      }
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value, name } = e.target;
    setOption(value);
    setUser({ ...user, [name]: value });
  };

  return (
    <section className="flex min-h-full w-full flex-col items-center justify-center px-6 py-20 lg:px-8">
      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-4xl  bg-white shadow-md rounded-xl p-4">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <FiUserPlus className="mx-auto h-12 w-auto" />
          <h3 className="my-5 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create New Account
          </h3>
        </div>

        <form
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          onSubmit={registerHandler}
          encType="multipart/form-data"
        >
          {/* First Name */}
          <div className="col-span-1">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first_name"
                id="first_name"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="col-span-1">
            <label
              htmlFor="last_name"
              className="block text-sm font-medium text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last_name"
                id="last_name"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                type="email"
                name="email"
                id="email"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="col-span-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Password confirmation*/}
          <div className="col-span-1">
            <label
              htmlFor="password_confirmation"
              className="block text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                autoComplete="off"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="col-span-1">
            <label
              htmlFor="phoneno"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                type="tel"
                name="phoneno"
                id="phoneno"
                pattern="[0-9]{10}"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Gender */}
          <div className="col-span-1">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-900"
            >
              Gender
            </label>
            <div className="mt-2">
              <select
                name="gender"
                id="gender"
                onChange={selectChangeHandler}
                value={option}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          {/* Age */}
          <div className="col-span-1">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-900"
            >
              Age
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="age"
                id="age"
                min="1"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Marital Status */}
          <div className="col-span-1">
            <label
              htmlFor="marital_status"
              className="block text-sm font-medium text-gray-900"
            >
              Marital Status
            </label>
            <div className="mt-2">
              <select
                name="marital_status"
                id="marital_status"
                onChange={selectChangeHandler}
                value={option}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              >
                <option value="">Select</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>
          </div>

          {/* Photo URL */}
          <div className="col-span-1">
            <label
              htmlFor="profile_picture"
              className="block text-sm font-medium text-gray-900"
            >
              Profile Picture
            </label>
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                name="profile_picture"
                id="profile_picture"
                onChange={chnageHandler}
                required
                className="block w-full rounded-md bg-white px-3 py-2 text-sm text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 sm:col-span-full text-center">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>

        <div className="mt-10 text-center text-sm text-gray-500">
          <span>Already have an account?</span>
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
