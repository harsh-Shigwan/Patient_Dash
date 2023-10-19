import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Consultation8 from "./Patient_Dashboard";
import consul from "../data/PatientData/consul.jpg";
import avatar from "../data/PatientData/avatar.jpg";
import rs from "../data/PatientData/rs.jpg";
const Consultation7 = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation8');
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <div className="flex left-[10px] ">
    <div className="relative bg-lightcyan w-full h-[745px] overflow-hidden text-left text-base text-blue-900 font-inter">
      <div className="absolute top-[464px] left-[194px] w-4 h-4 overflow-hidden" />
      <div className="absolute top-[114px] left-[32.29px] rounded-[22px] bg-white box-border w-[941.57px] h-[583.32px] overflow-hidden [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-teal-300">
        <div className="absolute top-[319.23px] left-[347.6px] text-sm leading-[150%] font-semibold text-white [transform:_rotate(-0.13deg)] [transform-origin:0_0]">
          2
        </div>
        <div className="absolute top-[53.9px] left-[46.07px] text-xl leading-[150%] font-medium text-green-500">
          Payment request sent
        </div>
        <div className="absolute top-[114.9px] left-[46.2px] leading-[150%] text-gray-400">
          <span className="font-medium">{`sent to `}</span>
          <span className="font-semibold text-slategray">78454215@ibls</span>
        </div>
        <div className="absolute top-[228.9px] left-[46.45px] leading-[150%] font-semibold">
          STEPS TO APPROVE
        </div>
        <div className="absolute top-[269.84px] left-[71.54px] leading-[150%] font-semibold">
          Open the UPI App on your phone
        </div>
        <div className="absolute top-[315.84px] left-[71.64px] leading-[150%]">
          <span className="font-medium">Approve the payment request from</span>
          <span className="font-semibold">{` CareChainAi `}</span>
        </div>
        <div className="absolute top-[413.19px] left-[364.86px] leading-[150%] font-medium">
          Time Remaining : 02:55 min
        </div>
        <div className="absolute top-[446.11px] left-[400.93px] leading-[150%] font-medium text-red-600">
          Cancel Transation
        </div>
        <div className="absolute top-[505.46px] left-[243.06px] text-sm leading-[150%] font-medium text-gray-400">
          Note : Do not refresh the window until your transaction is completed
        </div>
        <div className="absolute top-[273.9px] left-[46.5px] rounded-114xl bg-blue-900 w-[17px] h-[17px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-sm text-white">
          <div className="absolute top-[-2px] left-[5px] leading-[150%] font-semibold">
            1
          </div>
        </div>
        <div className="absolute top-[319.9px] left-[46.6px] rounded-114xl bg-blue-900 w-[17px] h-[17px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-sm text-white">
          <div className="absolute top-[-2px] left-[4px] leading-[150%] font-semibold">
            2
          </div>
        </div>
        <img
          className="absolute top-[381px] left-[214.89px] w-[509px] h-[3px]"
          alt=""
          src="/line-39.svg"
        />
        <img
          className="absolute top-[381px] left-[214.89px] w-[444px] h-[3px]"
          alt=""
          src="/line-40.svg"
        />
        <img
          className="absolute top-[176.5px] left-[33.89px] w-[860.01px] h-px"
          alt=""
          src="/line-41.svg"
        />
        <div className="absolute top-[122.13px] left-[842.16px] text-xl leading-[150%] text-gray-900 [transform:_rotate(-0.13deg)] [transform-origin:0_0]">
          599
        </div>
        <img
          className="absolute h-[2.57%] w-[1.27%] top-[22.63%] right-[11.12%] bottom-[74.8%] left-[87.61%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
      <div className="absolute top-[52px] left-[55.07px] text-[22px] leading-[150%] font-semibold [transform:_rotate(0.13deg)] [transform-origin:0_0]">
        Approve UPI Request
      </div>
      <img
        className="absolute top-[69px] left-[388.5px] w-px h-[676px]"
        alt=""
        src="/line-19.svg"
      />
    </div>
    </div>
    </div>
  );
};

export default Consultation7;