import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Consultation4 from "./Patient_Dashboard";
import consul from "../data/PatientData/consul.jpg";


const Consultation3 = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation4');
  }
  return (
    <div className="flex left-[10px] ">
  <div className="relative bg-lightcyan w-full h-[745px] overflow-hidden text-left text-base text-blue-900 font-inter">
      <div className="absolute top-[20px] left-[10px] w-4 h-4 overflow-hidden" />
      <div className="absolute top-[166px] left-[10.96px] rounded-[22px] bg-white box-border w-[941.57px] h-[510.76px] overflow-hidden [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-teal-300">
        <img
          className="absolute top-[70px] left-[535.04px] w-[354px] h-[232px] object-cover"
          alt=""
          src={consul}
        />
        <div className="absolute top-[9.99px] left-[906.06px] rounded-114xl bg-red-600 w-7 h-7 overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-[24px] text-white">
          <div className="absolute top-[-6px] left-[7px] leading-[150%] font-semibold">
            x
          </div>
        </div>
        <button>
        <div className="absolute top-[423.41px] left-[265.05px] bg-primary-700 box-border w-[129.8px] h-[34.96px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 text-sm text-white border-[1.5px] border-solid border-primary-600 " onClick={navigateToContacts}>
          <div className="relative leading-[150%] font-medium">Continue</div>
        </div>
        </button>
        <div className="absolute top-[50.89px] left-[48.22px] text-[20px] leading-[150%] font-semibold">
          Consult with a Doctor
        </div>
        <div className="absolute top-[91.89px] left-[48.3px] leading-[150%] font-medium">
          Consult Tell us your symptom or health problem
        </div>
        <div className="absolute top-[225.89px] left-[48.59px] leading-[150%] font-medium">
          Choose a relevant speciality
        </div>
        <div className="absolute top-[393.89px] left-[48.97px] leading-[150%] font-medium">
          Mobile number
        </div>
        <div className="absolute top-[193.89px] left-[48.51px] text-[12px] leading-[150%] font-medium text-gray1">
          Min 4 characters
        </div>
        <div className="absolute top-[130.89px] left-[48.33px] bg-white box-border w-[432px] h-[58px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400" />
        <div className="absolute top-[423.89px] left-[48.98px] bg-white box-border w-[175px] h-[35px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400" />
        <div className="absolute top-[255.89px] left-[48.61px] w-[203px] h-[127px] [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-sm text-gray-900">
          <div className="absolute top-[0px] left-[0px] bg-white box-border w-[203px] h-[37px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400">
            <div className="absolute top-[8px] left-[32px] leading-[150%]">
              Physician
            </div>
            <div className="absolute top-[8px] left-[170px] leading-[150%]">
              599
            </div>
            <div className="absolute top-[12px] left-[7px] rounded-114xl bg-white box-border w-3.5 h-3.5 overflow-hidden border-[1px] border-solid border-gray-400" />
          </div>
          <div className="absolute top-[45px] left-[0.1px] bg-white box-border w-[203px] h-[37px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400">
            <div className="absolute top-[8px] left-[32px] leading-[150%]">
              Physician
            </div>
            <div className="absolute top-[8px] left-[170px] leading-[150%]">
              599
            </div>
            <div className="absolute top-[12px] left-[7px] rounded-114xl bg-white box-border w-3.5 h-3.5 overflow-hidden border-[1px] border-solid border-gray-400" />
          </div>
          <div className="absolute top-[90px] left-[0.2px] bg-white box-border w-[203px] h-[37px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400">
            <div className="absolute top-[8px] left-[32px] leading-[150%]">
              Physician
            </div>
            <div className="absolute top-[8px] left-[171px] leading-[150%]">
              599
            </div>
            <div className="absolute top-[12px] left-[7px] rounded-114xl bg-white box-border w-3.5 h-3.5 overflow-hidden border-[1px] border-solid border-gray-400" />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[69px] left-[388.5px] w-px h-[676px]"
        alt=""
        src={consul}
      />
    </div>
    </div>
  );
};

export default Consultation3;