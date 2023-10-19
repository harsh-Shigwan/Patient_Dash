import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import consul from "../data/PatientData/consul.jpg";
import Consultation3 from "./Patient_Dashboard";

const Consultation = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation3');
  }
  return (
    <div className="flex left-[10px] ">
    <div className="relative bg-lightcyan w-full h-[745px] overflow-hidden text-left text-sm text-blue-900 font-inter">
      <div className="absolute top-[464px] left-[10px] w-4 h-4 overflow-hidden" />
      <div className="absolute top-[166px] left-[0.96px] rounded-[22px] bg-white box-border w-[941.57px] h-[433.87px] overflow-hidden [transform:_rotate(0.13deg)] [transform-origin:0_0] text-[18px] border-[1px] border-solid border-teal-300">
        <div className="absolute top-[303.37px] left-[250.77px] leading-[150%] font-medium">
          You do not have any previous consultations
        </div>
        <img
          className="absolute top-[0px] left-[233.04px] w-[474px] h-[304px] object-cover"
          alt=""
          src={consul}
        />
        <button>
        <div className="absolute top-[352.1px] left-[405.89px] bg-primary-700 box-border w-[129.8px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 text-sm text-white border-[1.5px] border-solid border-primary-600" onClick={navigateToContacts}>
          <div className="relative leading-[150%] font-medium">
            Ask a doctor
          </div>
        </div>
        </button>
      </div>
      <div className="absolute top-[90px] left-[10.05px] rounded-2xs bg-teal-200 box-border w-[90px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1.5px] border-solid border-teal-400">
        <div className="relative leading-[150%] font-medium">Paid</div>
      </div>
      <div className="absolute top-[90px] left-[200.07px] rounded-2xs bg-white box-border w-[90px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1.5px] border-solid border-teal-400">
        <div className="relative leading-[150%] font-medium">Free</div>
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

export default Consultation;