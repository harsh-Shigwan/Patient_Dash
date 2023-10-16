import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Consultation3 from "./Patient_Dashboard";
import consul from "../data/PatientData/consul.jpg";
const Consultation2 = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation3');
  }
  return (
    <div className="flex left-[10px] ">
    <div className="relative  left-[10px] bg-lightcyan w-full h-[745px] overflow-hidden text-left text-base text-blue-900 font-inter">
      <div className="absolute top-[464px] left-[10px] w-4 h-4 overflow-hidden" />
      <div className="absolute top-[166px] left-[10px] rounded-[22px] bg-white box-border w-[941.57px] h-[433.87px] overflow-hidden [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-teal-300">
        <img
          className="absolute top-[70px] left-[535.04px] w-[354px] h-[232px] object-cover"
          alt=""
          src={consul}
        />
        <button>
        <div className="absolute top-[289.44px] left-[320px] bg-primary-700 box-border w-[129.8px] h-[34.96px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 text-[14px] text-white border-[1.5px] border-solid border-primary-600" onClick={navigateToContacts}>
          <div className="relative leading-[150%] font-medium">Continue</div>
        </div>
        </button>
        <div className="absolute top-[54.92px] left-[38.23px] text-[20px] leading-[150%] font-semibold">
          Consult with a Doctor
        </div>
        <div className="absolute top-[95.92px] left-[38.31px] leading-[150%] font-medium">
          Consult Tell us your symptom or health problem
        </div>
        <div className="absolute top-[229.91px] left-[38.6px] leading-[150%] font-medium">
          A relevant speciality will be shown below
        </div>
        <div className="absolute top-[259.91px] left-[38.67px] leading-[150%] font-medium">
          Mobile number
        </div>
        <div className="absolute top-[197.91px] left-[38.52px] text-[12px] leading-[150%] font-medium text-gray1">
          Min 4 characters
        </div>
        <div className="absolute top-[134.92px] left-[38.34px] bg-white box-border w-[432px] h-[58px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400" />
        <div className="absolute top-[289.91px] left-[38.68px] bg-white box-border w-[175px] h-[35px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400" />
        <div className="absolute top-[9.99px] left-[906.06px] rounded-[133px] bg-red-600 w-7 h-7 overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-[24px] text-white">
          <div className="absolute top-[-6px] left-[7px] leading-[150%] font-semibold">
            x
          </div>
        </div>
      </div>
      <img
        className="absolute top-[69px] left-[388.5px] w-px h-[676px]"
        alt=""
        src="/line-19.svg"
      />
    </div>
    </div>
  );
};

export default Consultation2;