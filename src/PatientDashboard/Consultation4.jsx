import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Consultation5 from "./Patient_Dashboard";
import consul from "../data/PatientData/consul.jpg";
import avatar from "../data/PatientData/avatar.jpg";
import rs from "../data/PatientData/rs.jpg";
const Consultation4 = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation5');
  }
  return (
    <div className="flex left-[10px] ">
     <div className="relative bg-lightcyan w-full h-[745px] overflow-hidden text-left text-base text-blue-900 font-inter">
      <div className="absolute top-[46px] left-[10px] w-4 h-4 overflow-hidden" />
      <div className="absolute top-[166px] left-[10px] rounded-[22px] bg-white box-border w-[941.57px] h-[510.76px] overflow-hidden [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-teal-300">
        <img
          className="absolute top-[70px] left-[535.04px] w-[354px] h-[232px] object-cover"
          alt=""
          src={consul}
        />
        <div className="absolute top-[9.99px] left-[906.06px] rounded-[133px] bg-red-600 w-7 h-7 overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-[24px] text-white">
          <div className="absolute top-[-6px] left-[7px] leading-[150%] font-semibold">
            x
          </div>
        </div>
        <button>
        <div className="absolute top-[428.89px] left-[49.07px] bg-primary-700 box-border w-[210.56px] h-[45.63px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 text-[14px] text-white border-[1.5px] border-solid border-primary-600" onClick={navigateToContacts}>
          <div className="relative leading-[150%] font-medium">
            Continue to Payment
          </div>
        </div>
        </button>
        <div className="absolute top-[50.89px] left-[48.22px] text-[20px] leading-[150%] font-semibold">{`Confirm & Pay`}</div>
        <div className="absolute top-[91.89px] left-[48.3px] leading-[150%] font-medium">
          Verified Doctors online now
        </div>
        <div className="absolute top-[200.89px] left-[48.54px] leading-[150%] font-medium">
          One of them will speak to you directly
        </div>
        <div className="absolute top-[146.42px] left-[259.42px] leading-[150%] font-medium text-gray-400">
          +47
        </div>
        <div className="absolute top-[325.89px] left-[48.81px] leading-[150%] font-medium text-teal-500">
          Have a coupon code ?
        </div>
        <div className="absolute top-[364.89px] left-[48.9px] leading-[150%] font-medium text-gray-400">
          Final Fee
        </div>
        <div className="absolute top-[243.89px] left-[48.63px] text-lg leading-[150%] font-medium">
          Patients Name
        </div>
        <input
        className="absolute top-[276.89px] left-[48.65px] bg-white box-border w-[304px] h-[43px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400"
        placeholder="Name"
        type="text"
      />
        {/* <div className="absolute top-[276.89px] left-[48.65px] bg-white box-border w-[304px] h-[43px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400" /> */}
        <div className="absolute top-[130.89px] left-[48.33px] w-[203px] h-[55px] [transform:_rotate(-0.13deg)] [transform-origin:0_0]">
          <img
            className="absolute top-[0px] left-[0px] rounded-101xl w-[55px] h-[55px] object-cover"
            alt=""
            src={avatar}
          />
          <img
            className="absolute top-[0px] left-[37px] rounded-101xl w-[55px] h-[55px] object-cover"
            alt=""
            src={avatar}
          />
          <img
            className="absolute top-[0px] left-[74px] rounded-101xl w-[55px] h-[55px] object-cover"
            alt=""
            src={avatar}
          />
          <img
            className="absolute top-[0px] left-[111px] rounded-101xl w-[55px] h-[55px] object-cover"
            alt=""
            src={avatar}
          />
          <img
            className="absolute top-[0px] left-[148px] rounded-101xl w-[55px] h-[55px] object-cover"
            alt=""
            src={avatar}
          />
        </div>
        <div className="absolute top-[391.85px] left-[65.91px] text-lg leading-[150%] text-gray-900 [transform:_rotate(-0.13deg)] [transform-origin:0_0]">
          599
        </div>
        <img
          className="absolute top-[399px] left-[51.04px] w-3.5 h-3.5 overflow-hidden"
          alt=""
          src={rs}
        />
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

export default Consultation4;