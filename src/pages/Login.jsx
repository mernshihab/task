import React, { useState } from "react";
import { IoMdAlarm } from "react-icons/io";
import { CiBluetooth } from "react-icons/ci";
import { IoWifiSharp } from "react-icons/io5";
import { GiNetworkBars } from "react-icons/gi";
import { LuBatteryFull } from "react-icons/lu";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  let [show, setShow] = useState(false);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[393px] p-6 pb-[110px] shadow-sm">
        <div className="flex justify-between py-3">
          <div>
            <time className="font-poppins font-medium" datetime="5:13">
              5:13 PM
            </time>
          </div>
          <div className="flex">
            <IoMdAlarm className="ml-[3px]" />
            <CiBluetooth className="ml-[3px]" />
            <IoWifiSharp className="ml-[3px]" />
            <GiNetworkBars className="ml-[3px]" />
            <LuBatteryFull className="ml-[3px] text-xl" />
          </div>
        </div>
        <div className="text-center mt-[50px]">
          <img
            className="bg-iconBG p-[10px] mx-auto rounded-[25px]"
            src="Wave.svg"
            alt="Wave"
          />
          <h3 className="font-poppins font-semibold text-primary text-[32px] leading-10 mt-[30px]">
            Sign In
          </h3>
          <p className="font-poppins font-normal text-secondary text-sm mt-4 leading-[22px]">
            It was popularised in the 1960s with the release of Letraset
            sheetscontaining Lorem Ipsum.
          </p>
          <div className="flex justify-between text-left mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="bg-boxBG flex p-4 rounded-[14px]"
            >
              <img src="_Facebook.svg" alt="Facebook" />
              <h3 className="font-poppins font-medium text-base w-[91px] text-link leading-6 ml-4">
                Facebook
              </h3>
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              className="bg-boxBG flex p-4 rounded-[14px]"
            >
              <img src="_Google.svg" alt="Google" />
              <h3 className="font-poppins font-medium text-base w-[91px] text-link leading-6 ml-4">
                Google
              </h3>
            </a>
          </div>
          <div class="flex items-center mt-4">
            <div class="flex-grow border-t border-gray-200"></div>
            <p class="mx-[11px] font-poppins font-normal text-sm leading-5">Or</p>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-[14px] px-6 py-[18px] bg-boxBG outline-button"
            />
          </div>
          <div className="relative mt-4">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              className="w-full rounded-[14px] px-6 py-[18px] bg-boxBG outline-button"
            />
            {show ? (
              <FaRegEyeSlash
                onClick={() => setShow(!show)}
                className="absolute top-1/2 -translate-y-1/2 right-6 text-xl"
              />
            ) : (
              <FaEye
                onClick={() => setShow(!show)}
                className="absolute top-1/2 -translate-y-1/2 right-6 text-xl"
              />
            )}
          </div>
          <p className="font-poppins font-normal leading-[22px] text-end text-secondary mr-[14px] mt-2">
            Forget Password?
          </p>
          <button className="font-poppins font-medium text-base text-white bg-button leading-6 w-full py-[18px] rounded-[14px] mt-8 shadow-sm shadow-button">
            Log In
          </button>
          <p className="font-poppins font-normal leading-[22px] text-sm text-start mt-4">
            Don’t have account?{" "}
            <a href="#" className="text-button">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
