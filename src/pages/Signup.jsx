import React from "react";
import signupImg from "../assets/sign in-img.png";
import Headers from "../components/Headers";
import eye from "../assets/AiFillEye.svg"
import google from "../assets/google.png"
import fb from "../assets/fb.png"
import { Link } from "react-router-dom";
const Signup = () => {

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-1/2">
        <Headers></Headers>
        <div className="md:px-24 px-4 flex w-screen md:w-full flex-col  md:gap-4 gap-14">
          <h1 className=" text-3xl font-bold">Sign in</h1>
          <p className="text-slate-500 md:block hidden">
            Dont have an account?{" "}
            <span className="text-black underline">Create now</span>
          </p>

          <div className="flex flex-col gap-3">
            <label htmlFor="" className="text-slate-500 ">
              E-mail
            </label>
            <input
              className="border p-2 outline-none rounded-lg placeholder:text-slate-500"
              type="text"
              placeholder="example@gmail.com"
            />
            <label htmlFor="" className="text-slate-500 ">
              Password
            </label>
            <div className="w-full flex items-center">
              <input
                className="border p-2 outline-none rounded-s-lg border-r-0 placeholder:text-slate-500 w-[530px]"
                type="text"
                placeholder="@#$"
              />
              <button className="  border rounded-e-lg p-2">
                <img src={eye} alt="" />
              </button>
            </div>{" "}
            <div className="flex justify-between w-full">
              <div>
                <input id="remember" type="checkbox" />
                <label className="text-slate-500" htmlFor="remember">
                  remember me?
                </label>
              </div>
              <div>
                <a href="" className="underline">
                  Forgot password
                </a>
              </div>
            </div>
           <Link to={"/home"}>
              <div className=" p-3 text-center bg-cyan-700 rounded-[12px] mt-4">
                <button className="text-slate-50  font-semibold">Sign in</button>
              </div>
           </Link>
            <div className="flex items-center justify-center gap-4">
              <div className="w-60 h-[0px] border border-slate-400"></div>
              <p className="text-slate-500">Or</p>
              <div className="w-60 h-[0px] border border-slate-400"></div>
            </div>
            <div className="w-full py-4 px-6 rounded-[30px] border border-slate-300  items-center gap-2 inline-flex">
              <img src={google} alt="" />
              <p className="text-slate-500 text-lg text-center w-full ">
                Continue with Google
              </p>
            </div>
            <div className="w-full py-4 px-6 rounded-[30px] border border-slate-300  items-center gap-2 inline-flex">
              <img src={fb} alt="" />
              <p className="text-slate-500 text-lg text-center w-full ">
                Continue with Facebook
              </p>
            </div>
           <div className="flex justify-center mt-10">
              <p className="text-slate-500 md:hidden block">
                Dont have an account?{" "}
                <span className="text-black underline">Create now</span>
              </p>
           </div>
          </div>
        </div>
      </div>
      <div className="md:block hidden w-1/2 bg-[#83A092]">
        <img
          className="w-full h-[728px] object-contain"
          src={signupImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Signup;
