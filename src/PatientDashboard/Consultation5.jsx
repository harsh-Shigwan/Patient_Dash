import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Consultation7 from "./Patient_Dashboard";
import consul from "../data/PatientData/consul.jpg";


const Consultation5 = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation7');
  }
  return (
    <div className="flex left-[10px] ">
   <div className="relative bg-lightcyan w-full h-[745px] overflow-hidden text-left text-base text-blue-900 font-inter">
      <div className="absolute top-[464px] left-[194px] w-4 h-4 overflow-hidden" />
      <div className="absolute top-[120px] left-[77.91px] rounded-[22px] bg-white box-border w-[941.57px] h-[411.98px] overflow-hidden [transform:_rotate(0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-paleturquoise">
        <div className="absolute top-[26.84px] left-[71.16px] text-[20px] leading-[150%] font-semibold">
          Payment Options
        </div>
        <div className="absolute top-[105.88px] left-[52.83px] w-[203px] h-[252px]">
          <div className="absolute top-[-14px] left-[-0.97px]" />
          <div className="absolute top-[-14px] left-[-1.28px] flex flex-col items-start justify-center gap-[35px]">
            <div className="relative leading-[150%] font-medium">
              Credit Card / Debit Card
            </div>
            <button>
            <div className="relative leading-[150%] font-medium" onClick={navigateToContacts}>UPI</div>
            </button>
           
            <div className="relative leading-[150%] font-medium">Pay Later</div>
           
          </div>
        </div>
        <div className="absolute top-[290.86px] left-[515.72px] text-[12px] leading-[150%] font-medium text-gray-400">
          Your transactions are 100% secured
        </div>
        <img
          className="absolute top-[0.89px] left-[315.19px] w-px h-[413.18px]"
          alt=""
          src="/line-27.svg"
        />
        <div className="absolute top-[90.96px] left-[470.24px] rounded-[9px] bg-white shadow-[1px_1px_2px_rgba(55,_55,_55,_0.19)] box-border w-[295px] h-[179px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-3xs text-gray-400 border-[1px] border-solid border-gray-200">
          <div className="absolute top-[44.5px] left-[13.5px] box-border w-[268.01px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[89.5px] left-[13.5px] box-border w-[268.01px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[138.5px] left-[13.5px] box-border w-[77px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[138.5px] left-[147.5px] box-border w-[77px] h-px border-t-[1px] border-solid border-gray-200" />
          <div className="absolute top-[13px] left-[14px] leading-[150%] font-medium">
            CARD NUMBER
          </div>
          <div className="absolute top-[50px] left-[14px] leading-[150%] font-medium">
            CARD HOLDER’S NAME
          </div>  <input
        className="absolute  top-[130.89px] left-[45.33px] bg-white box-border w-[100px] h-[58px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] border-[1px] border-solid border-gray-400"
        placeholder="Name"
        type="text"
      />
          <div className="absolute top-[96px] left-[14px] leading-[150%] font-medium">
            VALID UPTO
          </div>
          <div className="absolute top-[96px] left-[148px] leading-[150%] font-medium">
            CVV
          </div>
        </div>
        <div className="absolute top-[1.3px] left-[316.04px] bg-blue-800 w-[626px] h-[57px] overflow-hidden [transform:_rotate(-0.13deg)] [transform-origin:0_0] text-white">
          <div className="absolute top-[11px] left-[23px] flex flex-row items-center justify-center gap-[6px]">
            <div className="relative leading-[150%] font-medium [transform:_rotate(0.13deg)] [transform-origin:0_0]">{`Amount to Pay :  `}</div>
            <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/teenyiconsrupeesolid.svg"
            />
            <div className="relative text-[18px] leading-[150%]">599</div>
          </div>
        </div>
        <div className="absolute top-[341.96px] left-[470.88px] bg-white box-border w-[142.18px] h-[36.67px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 [transform:_rotate(0.01deg)] [transform-origin:0_0] text-sm border-[1.5px] border-solid border-primary-600">
          <div className="relative leading-[150%] font-medium">Cancel</div>
        </div>
        <button>
        <div className="absolute top-[341.62px] left-[623.62px] bg-primary-700 box-border w-[142.18px] h-[36.67px] overflow-hidden flex flex-row items-center justify-center py-1.5 px-3.5 [transform:_rotate(0.01deg)] [transform-origin:0_0] text-sm text-white border-[1.5px] border-solid border-primary-600"  onClick={navigateToContacts} >
          <div className="relative leading-[150%] font-medium">Pay</div>
        </div>
        </button>
        <img
          className="absolute top-[129px] left-[0.04px] w-[316px] h-px"
          alt=""
          src="/line-36.svg"
        />
        <img
          className="absolute top-[187px] left-[-0.91px] w-[315.95px] h-px"
          alt=""
          src="/line-37.svg"
        />
        <img
          className="absolute top-[246px] left-[0.04px] w-[316px] h-px"
          alt=""
          src="/line-38.svg"
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

export default Consultation5;