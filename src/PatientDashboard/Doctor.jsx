"use client";
import React, { useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
//import { useNavigate,Route,Routes } from 'react-router-dom';
import drop from "../data/PatientData/drop.jpg";
import { CardData } from "../data/PatientData/dummy";
import { dropdownData, dropdown1Data } from "../data/PatientData/dummy";
import { useStateContext } from "../contexts/PatientContext/ContextProvider";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
//import profile from "./profile";
import { useNavigate, useHistory } from "react-router-dom";
import Calendar from "react-calendar";
import { BsSearch } from "react-icons/bs";
import jec from "../data/PatientData/jec.jpg";
import inj from "../data/PatientData/inj.jpg";
import logo from "../data/PatientData/logo.png";
import { CiLocationOn } from "react-icons/ci";
//import './App.css';
import Time from "../components/PatientComponents/Time";
//import { useId, useRef, useInsertionEffect } from 'react';
//import { useId, useRef, useInsertionEffect } from 'framer-motion';

const DropDown1 = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-96">
    <DropDownListComponent
      id="City"
      fields={{ text: "Dr", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdown1Data}
      popupHeight="220px"
      popupWidth="35vw"
    />
  </div>
);

const Doctor = () => {
  const DropDown = ({ currentMode, selectedCity, filterCardsByCity }) => (
    <div className=" border-4 border-color px-2 py-1 rounded-md w-56">
      <DropDownListComponent
        id="City"
        fields={{ text: "City", value: "Id" }}
        style={{ border: "none", color: currentMode === "Dark" && "white" }}
        dataSource={dropdownData}
        popupHeight="220px"
        popupWidth="20vw"
        placeholder="Select Your City"
        value={selectedCity}
        change={(e) => filterCardsByCity(e.value)}
      />
    </div>
  );

  const [selectedCity, setSelectedCity] = useState("All");

  //const [selectedCategory, setSelectedCategory] = useState('All');

  const filterCardsByCity = (CityId) => {
    setSelectedCity(CityId);
    if (CityId === "All") {
      setItems(CardData);
    } else {
      const filteredData = CardData.filter(
        (card) =>
          card.City === dropdownData.find((item) => item.Id === CityId).City
      );
      setItems(filteredData);
    }
  };

  const { currentColor, currentMode } = useStateContext();
  const [items, setItems] = useState(CardData);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

  
 
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
  
    const handleNavigation1 = () => {
      navigate1('/Consultation');
    };
    const handleNavigation2 = () => {
      navigate2('/Appointment');
    };


  

  const [details, setdetails] = useState([]);
  const detailpage = (Doctor) => {
    setdetails([{ ...Doctor }]);
  };
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  // window.scrollTo(0, 0);
  function scrollWin() {
    window.scrollTo(0, 0);
  }
  

  // // Rest of your detailpage function logic
  // setdetails([{ ...Doctor }]);

  return (
    
    <div className="text-center md:text-left lg:text-right">
      <section
        className=" mx-10 rounded-xl bg-teal-200  flex flex-col items-start justify-start p-[31px] text-left text-5xl text-black font-text-2xl-font-semibold"
        id="search"
      >
        <div
          className="flex flex-col items-start justify-start gap-[1px]"
          id="searchmain"
        >
          <h1
            className="m-0 relative text-inherit leading-[150%] font-semibold font-inherit inline-block w-[170px] h-[37px] shrink-0"
            id="search doc"
          >
            Search Doctor
          </h1>
          <h2
            className="m-0 relative text-sm leading-[150%] font-normal font-inherit inline-block w-[374px] h-[37px] shrink-0"
            id="lorem"
          >
            Sorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </div>
        <div
          className="relative rounded-xl bg-white box-border w-[933px] h-[57px] overflow-hidden shrink-0 text-lg text-gray1-200 border-[1px] border-solid border-teal-400"
          id="searchbox"
        >
          <div className="absolute top-[-0.5px] left-[343.5px] box-border w-px h-[58px] border-r-[1px] border-solid border-teal-400" />
          <div className="absolute top-[14px] left-[17px] w-[114px] flex flex-row items-center justify-start gap-[7px]">
            <CiLocationOn />
            <div className="relative leading-[150%] inline-block w-[113px] h-[25px] shrink-0">
              <DropDown
                currentMode={currentMode}
                selectedCity={selectedCity}
                filterCardsByCity={filterCardsByCity}
              ></DropDown>
            </div>
          </div>
          <div className="absolute top-[17px] left-[366px] flex flex-row items-start justify-start gap-[17px]">
            <BsSearch />
            <div className="relative leading-[150%] font-light inline-block w-[331px] h-[25px] shrink-0">
              <DropDown1 currentMode={currentMode}></DropDown1>
            </div>
          </div>
        </div>
      </section>

      <section
        className="  mt-10 rounded-xl bg-teal-200 mx-10 h-[119px]  flex flex-row items-start justify-start py-[33px] px-[39px] box-border gap-[22px]"
        id="filter"
      >
        <button
          className="cursor-pointer p-0 bg-white relative rounded-8xs box-border w-[127px] h-[57px]  shrink-0 border-[1px] border-solid border-teal-400"
          autoFocus={true}
          id="filterbut"
        >
          <div className="absolute top-[14px] left-[48px] text-lg leading-[150%] font-text-2xl-font-semibold text-teal-800 text-left">
            Filter
          </div>
          <div className="absolute top-[23px] left-[12px] box-border w-[25px] h-0.5 border-t-[2px] border-solid border-teal-800" />
          <div className="absolute top-[28px] left-[16px] box-border w-[17px] h-0.5 border-t-[2px] border-solid border-teal-800" />
          <img
            className="absolute top-[32px] left-[21px] w-2 h-0.5"
            alt="hii"
            src={drop}
          />
        </button>
        <button
          className="cursor-pointer py-[13px] pr-1 pl-[19px] bg-white rounded-8xs box-border w-[148px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[26px] border-[1px] border-solid border-teal-400"
          autoFocus={true}
          id="but2"
        >
          <div className="relative text-lg leading-[150%] font-text-2xl-font-semibold text-teal-800 text-left">
            Locality
          </div>
          <img
            className="relative rounded-10xs w-5 h-5 overflow-hidden shrink-0"
            alt="hii"
            src={drop}
          />
        </button>
        <button
          className="cursor-pointer py-[13px] pr-1 pl-[19px] bg-white rounded-8xs box-border w-[159px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[13px] border-[1px] border-solid border-teal-400"
          autoFocus={true}
          id="but3"
        >
          <div className="relative text-lg leading-[150%] font-text-2xl-font-semibold text-teal-800 text-left">
            Availability
          </div>
          <img
            className="relative rounded-10xs w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src={drop}
          />
        </button>
        <button
          className="cursor-pointer py-[13px] pr-1 pl-[19px] bg-white rounded-8xs box-border w-[122px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[24px] border-[1px] border-solid border-teal-400"
          autoFocus={true}
          id="but4"
        >
          <div className="relative text-lg leading-[150%] font-text-2xl-font-semibold text-teal-800 text-left">
            Price
          </div>
          <img
            className="relative rounded-10xs w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src={drop}
          />
        </button>
        <button
          className="cursor-pointer py-[13px] pr-1 pl-[19px] bg-white rounded-8xs box-border w-[131px] overflow-hidden shrink-0 flex flex-row items-center justify-start gap-[13px] border-[1px] border-solid border-teal-400"
          autoFocus={true}
          id="but5"
        >
          <div className="relative text-lg leading-[150%] font-text-2xl-font-semibold text-teal-800 text-left">
            Gender
          </div>
          <img
            className="relative rounded-10xs w-5 h-5 overflow-hidden shrink-0"
            alt=""
            src={drop}
          />
        </button>
      </section>
      <div className=" flex">
     
      <div className=" h-full w-4/6 ">
      {CardData.map((x) => {
        return (
    <div
      className=" relative  rounded-11xl bg-white box-border w-[674px] h-[302px]  border-[1px] border-solid border-teal-300 overflow-hidden mx-10 mt-10"
      id="doc1"
    > 
     
     
      <div className="  ">
      <div className="absolute top-[34px] left-[254px] text-3xl leading-[150%] font-semibold">
      {x.Name} 
      </div>
      <div className="absolute top-[67px] left-[254px] leading-[150%] text-gray1-200">
      {x.Edu}
      </div>
      <div className="absolute top-[94px] left-[254px] leading-[150%] text-gray1-200">
      {x.Exp}
      </div>
      <div className="absolute top-[121px] left-[254px] leading-[150%]">
      {x.City}
      </div>
      <div className="absolute top-[148px] left-[254px] text-sm leading-[150%]">
       {x.Det}
      </div>
      <div className="absolute top-[186px]  left-[253px] rounded-4xs bg-teal-600 box-border w-[78px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[7px] gap-[8px] text-xs text-white border-[1px] border-solid border-teal-700">
        <img
          className="relative w-4 h-4 overflow-hidden shrink-0"
          alt=""
          src="/fa6solidthumbsup.svg"
        />
        <div className="relative leading-[150%] font-semibold">95%</div>
      </div>
      <button
        className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[235px] left-[254px] rounded-8xs shadow-[0px_2px_10px_rgba(0,_0,_0,_0.2)] w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
        autoFocus={true} onClick={handleNavigation1}
      >
        <div className="relative text-base leading-[150%] font-semibold font-text-2xl-font-semibold text-white text-left">
          Online Consultation
        </div> 
      </button>
      <button
        className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[235px] left-[455px] rounded-8xs shadow-[0px_2px_10px_rgba(0,_0,_0,_0.2)] w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
        onClick={handleNavigation2}
        autoFocus={true}
      >
        <div className="relative text-base leading-[150%] font-semibold font-text-2xl-font-semibold text-white text-left">
          Book Appointment
        </div>
      </button>
      <img
        className=" absolute top-[41px] left-[10px] rounded-126xl-5 w-[226px] h-[233px] object-cover"
        alt=""
        src="https://images.apollo247.in/doctors/noimagemale.png"
      />
      <div className=" absolute top-[-34px] left-[567px] rounded-[50%] bg-teal-100 shadow-[0px_2px_5px_rgba(0,_0,_0,_0.1)] w-32 h-32 overflow-hidden" />
      <div className="absolute top-[18px] left-[581px] text-sm leading-[150%] text-center">
        <p className="m-0">Free Online</p>
        <p className="m-0">Consultation</p>
      </div>
    </div></div>);
  })}
      </div><div className=" sticky "><div
      className=" relative    rounded-xl  bg-white box-border w-[293px] h-[297px]  mx-5 mt-10  text-base text-gray1-200 border-[1px] border-solid border-teal-300"
      id="tips"
    >
      <div className="absolute top-[15px] left-[16px] text-3xl leading-[150%] font-semibold text-blue-900">
        Top Health Tips
      </div>
      <div className="absolute top-[55.65px] left-[9.65px] box-border w-[273.7px] h-[0.7px] border-t-[0.7px] border-solid border-gray-200" />
      <div className="absolute top-[110.65px] left-[9.65px] box-border w-[273.7px] h-[0.7px] border-t-[0.7px] border-solid border-gray-200" />
      <div className="absolute top-[165.65px] left-[9.65px] box-border w-[273.7px] h-[0.7px] border-t-[0.7px] border-solid border-gray-200" />
      <div className="absolute top-[219.65px] left-[9.65px] box-border w-[273.7px] h-[0.7px] border-t-[0.7px] border-solid border-gray-200" />
      <div className="absolute top-[71px] left-[29px] leading-[150%]">
        18+ years of experience overall
      </div>
      <div className="absolute top-[181px] left-[29px] leading-[150%]">
        18+ years of experience overall
      </div>
      <div className="absolute top-[235px] left-[29px] leading-[150%]">
        18+ years of experience overall
      </div>
      <div className="absolute top-[126px] left-[29px] leading-[150%]">
        18+ years of experience overall
      </div>
    </div> <div
    className=" relative  mx-5 mt-10 rounded-xl bg-white box-border w-[293px] h-[468px] text-3xl border-[1px] border-solid border-teal-300"
    id="insurance"
  >
    <div className="absolute top-[15px] left-[16px] leading-[150%] font-semibold">
      Health Insurance
    </div>
    <img
      className="absolute top-[32px] left-[22px] w-[250px] h-[250px] object-cover"
      alt=""
      src={logo}
    />
  </div></div></div>
  <div className="relative mt-10 bg-teal-100 w-full h-[380px] overflow-hidden text-left text-5xl text-gray-900 font-text-2xl-font-semibold">
      <div className="absolute top-[272px] left-[400px] flex flex-row items-center justify-start gap-[12px]">
        <img className="relative w-8 h-8" alt="" src={logo}/>
        <div className="relative leading-[150%] font-semibold">CareChainAI</div>
      </div>
      <div className="absolute top-[67px] left-[200px] w-[771px] h-[170px] text-base text-blue-900">
        <div className="absolute top-[0px] left-[0px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[98px] left-[0px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[0px] left-[262px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[0px] left-[524px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[98px] left-[524px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[98px] left-[277px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[0px] left-[131px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[98px] left-[131px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[0px] left-[393px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[0px] left-[655px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[98px] left-[655px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
        <div className="absolute top-[98px] left-[393px] leading-[150%] font-semibold inline-block w-[116px]">
          Gorem ipsum dolor sit amet consectetur
        </div>
      </div>
      <img
        className="absolute top-[108px] left-[0px] w-[173.81px] h-[272px] object-cover opacity-[0.85]"
        alt=""
        src={jec}
      />
      <img
        className="absolute top-[108px] left-[1049px] w-[191px] h-[274.43px] object-cover opacity-[0.85]"
        alt=""
        src={inj}
      />
    </div>
    </div>
  
  );
};

export default Doctor;
