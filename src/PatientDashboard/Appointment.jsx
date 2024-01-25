import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, Route, Routes } from "react-router-dom";
import docp from "../data/PatientData/docp.jpg";
import { CardData } from "../data/PatientData/dummy";
import { dropdownData, dropdown1Data } from "../data/PatientData/dummy";
import { useStateContext } from "../contexts/PatientContext/ContextProvider";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";

import cliklogo from "../data/PatientData/cliklogo.jpg";
import cancelicon from "../data/PatientData/cancelicon.jpg";
const Appointment = () => {
  const [showModels, setShowModels] = useState(false);

  const getAbbreviatedMonthName = (month) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[month];
  };

  const navigate = useNavigate();
  const navigateToContacts = () => {
    navigate("/Consultation");
  };

  const getAbbreviatedDayName = (day) => {
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return dayNames[day];
  };
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

  const MyModels = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigate = useNavigate();
    const navigateToContacts = () => {
      navigate("/Doc1");
    };
    const handleDateChange = (days) => {
      const newDate = new Date(selectedDate);
      newDate.setDate(selectedDate.getDate() + days);
      setSelectedDate(newDate);
    };

    const abbreviatedMonth = getAbbreviatedMonthName(selectedDate.getMonth());
    const abbreviatedDay = getAbbreviatedDayName(selectedDate.getDay());
    return ReactDOM.createPortal(
      <div>
        <div className=" fixed left-0 top-0 bottom-0 right-0 bg-teal-100 opacity-75 ">
          <div className="fixed  "></div>{" "}
          <div className="rounded-3xl bg-white mt-2 left-[370px] w-[596px] h-[608px] overflow-hidden text-left text-lg text-green-500 font-text-sm-font-semibold relative">
            <div className="absolute top-[0px] left-[0px] bg-teal-100 w-[596px] h-[121px] overflow-hidden text-base text-blue-900">
              <img
                className="absolute top-[3px] left-[3px] rounded-xl w-[122px] h-[118px] object-cover"
                alt=""
                src={docp}
              />
              <div className="absolute top-[8px] left-[128px] text-xl leading-[150%] font-semibold">
                Dr. Raghav Gupta
              </div>
              <div className="absolute top-[40px] left-[128px] leading-[150%] text-gray1">
                M.B.B.S
              </div>
              <div className="absolute top-[66px] left-[128px] leading-[150%] text-gray1">
                18+ years of experience overall
              </div>
              <div className="absolute top-[92px] left-[128px] leading-[150%]">
                Santacruz, Mumbai
              </div>
              <div className="absolute top-[94px] left-[303px] text-sm leading-[150%]">
                Millennium Smile Dental Clinic
              </div>
              <div className="absolute top-[8px] left-[377px] flex flex-row items-start justify-start gap-[7px] text-sm text-teal-500">
                <div className="rounded-3xs bg-white overflow-hidden flex flex-row items-center justify-center py-1 px-[7px] border-[0.5px] border-solid border-teal-500">
                  <div className="relative leading-[150%] font-medium">
                    Consultation Fees 500/-
                  </div>
                </div>
                <div onClick={() => setShowModels(false)}>
                  <img
                    className="relative w-7 h-7 overflow-hidden shrink-0"
                    alt=""
                    src={cancelicon}
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[121px] left-[0px] bg-gray-200 w-[596px] h-[73px] overflow-hidden text-xl text-black">
              <div className="absolute top-[0px] left-[77px] w-24 h-[73px] text-firebrick">
                <div className="absolute top-[0px] left-[0px] text-31xl leading-[150%] font-medium inline-block w-[55px] h-[73px]">
                  12
                </div>
                <div className="absolute top-[11.68px] left-[62px] leading-[150%] inline-block w-8 h-[29.2px]">
                  Sat
                </div>
                <div className="absolute top-[33.09px] left-[62px] leading-[150%] inline-block w-[34px] h-[29.2px]">
                  Oct
                </div>
              </div>
              <div className="absolute top-[0px] left-[250px] w-[99px] h-[73px]">
                <div className="absolute top-[0px] left-[0px] text-31xl leading-[150%] font-medium inline-block w-14 h-[73px]">
                  13
                </div>
                <div className="absolute top-[11.68px] left-[62px] leading-[150%] inline-block w-[37px] h-[29.2px]">
                  Sun
                </div>
                <div className="absolute top-[33.09px] left-[62px] leading-[150%] inline-block w-[34px] h-[29.2px]">
                  Oct
                </div>
              </div>
              <div className="absolute top-[0px] left-[426px] w-[104px] h-[73px]">
                <div className="absolute top-[0px] left-[0px] text-31xl leading-[150%] font-medium inline-block w-[57px] h-[73px]">
                  14
                </div>
                <div className="absolute top-[11.68px] left-[62px] leading-[150%] inline-block w-[42px] h-[29.2px]">
                  Mon
                </div>
                <div className="absolute top-[33.09px] left-[62px] leading-[150%] inline-block w-[34px] h-[29.2px]">
                  Oct
                </div>
              </div>
              <img
                className="absolute top-[27px] left-[558px] rounded-10xs w-5 h-5 overflow-hidden"
                alt=""
                src="/chevrondown.svg"
              />
              <img
                className="absolute top-[72px] left-[37.5px] w-[164.01px] h-px"
                alt=""
                src="/line-12.svg"
              />
            </div>
            <div className="absolute top-[238px] left-[29px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                10:30 AM
              </div>
            </div>
            <div className="absolute top-[355px] left-[30px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                12:30 PM
              </div>
            </div>
            <div className="absolute top-[472px] left-[30px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                7:30 PM
              </div>
            </div>
            <div className="absolute top-[472px] left-[219px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                7:30 PM
              </div>
            </div>
            <div className="absolute top-[238px] left-[408px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                7:30 PM
              </div>
            </div>
            <div className="absolute top-[208px] left-[30px] text-xl leading-[150%] font-medium text-green-900">
              Morning Slots
            </div>
            <div className="absolute top-[311px] left-[30px] text-xl leading-[150%] font-medium text-green-900">
              Afternoon Slots
            </div>
            <div className="absolute top-[428px] left-[30px] text-xl leading-[150%] font-medium text-green-900">
              Evening Slots
            </div>
            <div className="absolute top-[238px] left-[218px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                11:00 AM
              </div>
            </div>
            <div className="absolute top-[355px] left-[219px] rounded-3xs bg-white box-border w-[158px] h-[73px] overflow-hidden border-[2px] border-solid border-green-400">
              <div className="absolute top-[23px] left-[38px] leading-[150%] font-medium">
                1:00 PM
              </div>
            </div>
            <div className="absolute top-[545px] left-[440px] rounded-3xs bg-blue-700 box-border w-[136px] overflow-hidden flex flex-row items-center justify-center py-2.5 px-[5px] text-base text-white border-[2px] border-solid border-blue-700">
              <div
                className="relative leading-[150%] font-medium"
                onClick={navigateToContacts}
              >
                Confirm Slot
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.querySelector(".myPortal")
    );
  };
  return (
    <div>
      {" "}
      <section
        className=" relative  mt-5 mx-10  rounded-xl bg-teal-200  flex flex-col items-start justify-start p-[31px] text-left text-5xl text-black font-text-lg-font-normal"
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
            <img
              className="relative w-[30px] h-[30px] overflow-hidden shrink-0"
              alt=""
              src="/eilocation.svg"
            />
            <div className="relative leading-[150%] inline-block w-[113px] h-[25px] shrink-0">
              Mumbai
            </div>
          </div>
          <div className="absolute top-[17px] left-[366px] flex flex-row items-start justify-start gap-[17px]">
            <img
              className="relative w-[25px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/carbonsearch.svg"
            />
            <div className="relative leading-[150%] font-light inline-block w-[331px] h-[25px] shrink-0">
              Search doctors, clinics, hospitals, etc.
            </div>
          </div>
        </div>
      </section>
      <div className=" flex">
        <div className="   h-[321px]  w-4/6  ">
          {" "}
          <div
            className=" relative mx-10  mt-10  rounded-11xl bg-white box-border w-[674px] h-[321px]   text-lg border-[1px] border-solid border-teal-300"
            id="doc1"
          >
            <div className="absolute top-[34px] left-[254px] text-3xl leading-[150%] font-semibold">
              Dr. Raghav Gupta
            </div>
            <div className="absolute top-[67px] left-[254px] leading-[150%] text-gray1-200">
              M.B.B.S
            </div>
            <div className="absolute top-[94px] left-[254px] leading-[150%] text-gray1-200">
              18+ years of experience overall
            </div>
            <div className="absolute top-[121px] left-[254px] leading-[150%]">
              Santacruz, Mumbai
            </div>
            <div className="absolute top-[148px] left-[254px] text-sm leading-[150%]">
              Millennium Smile Dental Clinic
            </div>
            <div className="absolute  top-[186px] left-[253px] rounded-4xs bg-teal-600 box-border w-[69px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[7px] gap-[8px] text-xs text-white border-[1px] border-solid border-teal-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src=""
              />
              <div className="relative leading-[150%] font-semibold">95%</div>
            </div>
            <button
              className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[235px] left-[254px] rounded-8xs w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
              onClick={navigateToContacts}
              autoFocus={true}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-white text-left">
                Online Consultation
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[235px] left-[455px] rounded-8xs w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
              autoFocus={true}
              onClick={() => setShowModels(true)}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-white text-left">
                Book Appointment
              </div>
            </button>
            {showModels && <MyModels />}
            <img
              className="absolute top-[41px] left-[10px] rounded-126xl-5 w-[226px] h-[233px] object-cover"
              alt=""
              src={docp}
            />
          </div>
          <div className=" mx-10 ">
            <h1 className=" relative top-[40px]  text-inherit leading-[150%] font-semibold font-inherit">
              Book Clinic Appointment with Dr. Raghav Gupta
            </h1>{" "}
          </div>{" "}
          <div className=" relative top-[64px] mx-10  rounded-2xs bg-white box-border w-[674px] h-[209px] overflow-hidden text-xs text-white border-[1px] border-solid border-teal-300">
            <img
              className="absolute top-[17px] left-[23px] w-[99px] h-[111px] object-cover"
              alt=""
              src={cliklogo}
            />
            <div className="absolute top-[100px] left-[141px] rounded-4xs bg-teal-600 box-border w-[69px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[7px] gap-[8px] border-[1px] border-solid border-teal-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src=""
              />
              <div className="relative leading-[150%] font-semibold">95%</div>
            </div>
            <div className="absolute top-[35px] left-[141px] text-lg leading-[150%] font-medium text-black inline-block w-[517px] h-[54px]">
              <p className="m-0">Dr. Ram’s Advanced Surgical Hospital</p>
              <p className="m-0">{`Noble Trade Center, 309 & 312, opp. BD Rao hall, Memnagar`}</p>
            </div>
            <button
              className="cursor-pointer py-[5px] px-[7px] bg-primary-50 absolute top-[143px] left-[272px] rounded-8xs box-border w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-blue-800"
              autoFocus={true}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-blue-900 text-left">
                Call Clinic
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[143px] left-[473px] rounded-8xs w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
              autoFocus={true}
              onClick={() => setShowModels(true)}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-white text-left">
                Book Appointment
              </div>
            </button>
            {showModels && <MyModels />}
          </div>
          <div className=" relative mx-10 top-[100px]  rounded-2xs bg-white box-border w-[674px] h-[209px] overflow-hidden text-xs text-white border-[1px] border-solid border-teal-300">
            <img
              className="absolute top-[17px] left-[23px] w-[99px] h-[111px] object-cover"
              alt=""
              src={cliklogo}
            />
            <div className="absolute top-[100px] left-[141px] rounded-4xs bg-teal-600 box-border w-[69px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[7px] gap-[8px] border-[1px] border-solid border-teal-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src=""
              />
              <div className="relative leading-[150%] font-semibold">95%</div>
            </div>
            <div className="absolute top-[35px] left-[141px] text-lg leading-[150%] font-medium text-black inline-block w-[517px] h-[54px]">
              <p className="m-0">Dr. Ram’s Advanced Surgical Hospital</p>
              <p className="m-0">{`Noble Trade Center, 309 & 312, opp. BD Rao hall, Memnagar`}</p>
            </div>
            <button
              className="cursor-pointer py-[5px] px-[7px] bg-primary-50 absolute top-[143px] left-[272px] rounded-8xs box-border w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-blue-800"
              autoFocus={true}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-blue-900 text-left">
                Call Clinic
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[143px] left-[473px] rounded-8xs w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
              autoFocus={true}
              onClick={() => setShowModels(true)}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-white text-left">
                Book Appointment
              </div>
            </button>
            {showModels && <MyModels />}
          </div>
          <div className=" mx-10 absolute top-[1266px]  rounded-2xs bg-white box-border w-[674px] h-[209px] overflow-hidden text-xs text-white border-[1px] border-solid border-teal-300">
            <img
              className="absolute top-[17px] left-[23px] w-[99px] h-[111px] object-cover"
              alt=""
              src={cliklogo}
            />
            <div className="absolute top-[100px] left-[141px] rounded-4xs bg-teal-600 box-border w-[69px] overflow-hidden flex flex-row items-start justify-start py-[5px] px-[7px] gap-[8px] border-[1px] border-solid border-teal-700">
              <img
                className="relative w-4 h-4 overflow-hidden shrink-0"
                alt=""
                src="/fa6solidthumbsup1.svg"
              />
              <div className="relative leading-[150%] font-semibold">95%</div>
            </div>
            <div className="absolute top-[35px] left-[141px] text-lg leading-[150%] font-medium text-black inline-block w-[517px] h-[54px]">
              <p className="m-0">Dr. Ram’s Advanced Surgical Hospital</p>
              <p className="m-0">{`Noble Trade Center, 309 & 312, opp. BD Rao hall, Memnagar`}</p>
            </div>
            <button
              className="cursor-pointer py-[5px] px-[7px] bg-primary-50 absolute top-[143px] left-[272px] rounded-8xs box-border w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-blue-800"
              autoFocus={true}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-blue-900 text-left">
                Call Clinic
              </div>
            </button>
            <button
              className="cursor-pointer [border:none] py-[5px] px-[7px] bg-primary-700 absolute top-[143px] left-[473px] rounded-8xs w-[185px] h-10 overflow-hidden flex flex-row items-center justify-center box-border"
              autoFocus={true}
              onClick={() => setShowModels(true)}
            >
              <div className="relative text-base leading-[150%] font-semibold font-text-lg-font-normal text-white text-left">
                Book Appointment
              </div>
            </button>
            {showModels && <MyModels />}
          </div>{" "}
          <h1 className=" mx-10 absolute top-[1566px]  text-inherit leading-[150%] font-semibold font-inherit">{`About Dr. Raghav Gupta `}</h1>
          <div className="absolute top-[1614px] mx-10   w-[995px] h-[380px] text-inherit font-inherit">
            <div className="absolute top-[0px] left-[0px] rounded-2xs bg-white box-border w-[995px] h-[380px] overflow-hidden border-[1px] border-solid border-teal-300" />
            <div className=" relative top-[16px] left-[19px] w-[962px] h-[262px]">
              <div className="absolute top-[0px] left-[8px] rounded-4xl bg-green-300 w-[104px] h-[35px] overflow-hidden flex flex-row items-center justify-center text-lg text-green-900 font-text-lg-font-normal">
                <div className=" absolute leading-[150%] font-medium">
                  Speciality
                </div>
              </div>
              <div className="absolute top-[18px] left-[0px] leading-[150%] font-medium inline-block w-[328px] h-[244px]">
                <p className="m-0">&nbsp;</p>
                <ul className="m-0 pl-6">
                  <li className="mb-0">General Surgeon</li>
                </ul>
                <p className="m-0">Other treatment areas</p>
                <ul className="m-0 pl-6">
                  <li className="mb-0">Cardiothoracic Surgeon</li>
                  <li className="mb-0">Colorectal Surgeon</li>
                  <li className="mb-0">Transplant Surgeon</li>
                  <li className="mb-0">Venous Ulcer Treatment Specialist</li>
                </ul>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">&nbsp;</p>
              </div>
              <div className="absolute top-[0px] left-[372px] w-[590px] h-[262px]">
                <div className="absolute top-[250px] left-[11.12px] leading-[150%] font-medium inline-block w-[92.8px]">
                  <p className="m-0">&nbsp;</p>
                  <ul className="m-0 pl-6">
                    <li className="mb-0">English</li>
                    <li>Hindi</li>
                  </ul>
                </div>
                <div className="absolute top-[233px] left-[11.12px] rounded-4xl bg-blue-100 w-[199px] h-[35px] overflow-hidden flex flex-row items-center justify-center text-lg font-text-lg-font-normal">
                  <div className="relative leading-[150%] font-medium">
                    Languages spoken
                  </div>
                </div>
                <div className="absolute top-[0px] left-[11.12px] rounded-4xl bg-yellow-200 w-[125.79px] h-[35px] overflow-hidden flex flex-row items-center justify-center text-lg text-yellow-900 font-text-lg-font-normal">
                  <div className="relative leading-[150%] font-medium">
                    Education
                  </div>
                </div>
                <div className="absolute top-[18px] left-[0px] leading-[150%] font-medium inline-block w-[590px] h-[138px]">
                  <p className="m-0">&nbsp;</p>
                  <ul className="m-0 pl-6">
                    <li className="mb-0">
                      MBBS , B.J. Medical College, Ahmedabad (Gujarat
                      University), 2007
                    </li>
                    <li>{`MS - General Surgery , Smt NHL Municipal Medical college & Vadilal Sarabhai Hospital, Ahmedabad , 2016`}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className=" mx-10 absolute top-[2051px]  rounded-2xs bg-white box-border w-[965px] h-[262px] overflow-hidden text-lg border-[1px] border-solid border-teal-300">
            <div className="absolute top-[16px] left-[27px] rounded-4xl bg-paleturquoise box-border w-[186px] h-[35px] overflow-hidden flex flex-row items-center justify-center text-darkslategray-100 border-[1px] border-solid border-cadetblue">
              <div className="relative leading-[150%] font-medium">
                Patients Feedback
              </div>
            </div>
            <div className="absolute top-[76px] left-[52px] leading-[150%] font-medium inline-block w-[754px]">
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="absolute top-[145px] left-[52px] leading-[150%] font-medium">{`Norem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            <div className="absolute top-[197px] left-[52px] leading-[150%] font-medium">{`Norem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            <div className="absolute top-[81px] left-[12px] rounded-35xl bg-white box-border w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-black" />
            <div className="absolute top-[144px] left-[12px] rounded-35xl bg-white box-border w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-black" />
            <div className="absolute top-[196px] left-[12px] rounded-35xl bg-white box-border w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-black" />
          </div>{" "}
        </div>
        <div className=" h-full relative   ">
          {" "}
          <div
            className=" relative   mt-10 ml-5  rounded-xl bg-white box-border w-[293px] h-[297px] text-base text-gray1-200 border-[1px] border-solid border-teal-300"
            id="tips"
          >
            <div className="absolute top-[10px] left-[16px] text-3xl leading-[150%] font-semibold text-blue-900">
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
          </div>{" "}
          <div
            className="  ml-5 absolute   mt-10 rounded-xl bg-white box-border w-[293px] h-[468px] text-3xl border-[1px] border-solid border-teal-300"
            id="insurance"
          >
            <div className="absolute top-[15px] left-[16px] leading-[150%] font-semibold">
              Health Insurance
            </div>
            <img
              className="absolute top-[32px] left-[22px] w-[250px] h-[250px] object-cover"
              alt=""
              src="https://s3-alpha-sig.figma.com/img/91bd/bc0b/0741bbfda58053dc28896dab7f0c49d0?Expires=1698019200&Signature=m6AtAsfq842PjkJjPHQt-ClRmUkn2gQXgE09u~2SdP6sMZPUq-A0lAu2ZUnxBwlfKtB5~ftUsKfp~gUVUNGtHREepB-8r~Y-LpDGdVSyDVRFLxt6KPa6uUR8G2QpP5JXic7ftzr0olcf5paxTgmUZOHXfJwQTDrQdWEIkLL68cM9svbWye2LMhJ~TLq73C~kSo~9AdOvhAngjDogA9dA0rk~AgmU3z~1JoTXaxfTgp0U2s-NjbE8qjpFYdBIt4unyt5KMkc5RlQdxEapdD1Bc-YiPmlbBirz9Ly9o~vSnOb1-l8m6fTXoN1iPdqwvQ9oEOJIUWF8Xh~sdDZ1HDq2XA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
