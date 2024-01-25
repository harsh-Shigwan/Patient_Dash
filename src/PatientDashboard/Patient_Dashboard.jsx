import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { useNavigate,Route,Routes } from 'react-router-dom';
import doctor from "../data/PatientData/doctor.jpg";
import pregnancy from "../data/PatientData/pregnancy.png";
import acne from "../data/PatientData/acne.png";
import medical from "../data/PatientData/medical.jpg";
import dentist from "../data/PatientData/dentist.jpg";
import Vector from "../data/PatientData/Vector.jpg";
import Vector2 from "../data/PatientData/Vector2.jpg";
import Vector3 from "../data/PatientData/Vector3.jpg";
import Vector4 from "../data/PatientData/Vector4.jpg";
import Vector5 from "../data/PatientData/Vector5.jpg";
import Vector6 from "../data/PatientData/Vector6.jpg";
import Tablet from "../data/PatientData/Tablet.jpg";
import play from "../data/PatientData/play.jpg";
import jec from "../data/PatientData/jec.jpg";
import inj from "../data/PatientData/inj.jpg";
import See from "../data/PatientData/See.jpg";
import Mob from "../data/PatientData/Mob.jpg";
import logo from "../data/PatientData/logo.png";
import Mobile from "../data/PatientData/Mobile.jpg";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import HorizontalImageCardList from "../components/PatientComponents/HorizontalImageCardList";

import { home1 } from "../data/PatientData/dummy";
import {
  Stacked,
  Pie,
  Button,
  LineChart,
  SparkLine,
} from "../components/PatientComponents";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  data,
  dropdown1Data,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/PatientData/dummy";
import { useStateContext } from "../contexts/PatientContext/ContextProvider";
import product9 from "../data/PatientData/product9.jpg";
import { GiInjustice } from "react-icons/gi";

const DropDown = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-64">
    <DropDownListComponent
      id="City"
      fields={{ text: "City", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="25vw"
    />
  </div>
);



const DropDown1 = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-5/6">
    <DropDownListComponent
      id="City"
      fields={{ text: "Dr", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdown1Data}
      popupHeight="220px"
      popupWidth="38vw"
    />
  </div>
);

const Patient_Dashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  const cardData = [
    {
      title: "Dentist",
      description: "Teething troubles? Schedule a dental checkup",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
    },
    {
      title: "Gynecologist/Obstetrician",
      description:
        "Explore for women’s health, pregnancy and infertility treatments",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
    },
    {
      title: "Dietitian/Nutrition",
      description:
        "Get guidance on eating right, weight management and sports nutrition",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
    },
    {
      title: "Physiotherapist",
      description:
        "Pulled a muscle? Get it treated by a trained physiotherapist",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
    },
    {
      title: "General surgeon",
      description: "Need to get operated? Find the right surgeon",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-surgeon@2x.jpg",
    },
    {
      title: "Orthopedist",
      description: "For Bone and Joints issues, spinal injuries and more",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-orthopedist@2x.jpg",
    },
    {
      title: "General physician",
      description: "Find the right family doctor in your neighborhood",
      image:
        "https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-general-doctor@2x.jpg",
    },
    {
      title: "Card 7",
      description: "Description for Card 3",
      image: "url_to_image_3.jpg",
    },
    {
      title: "Card 8",
      description: "Description for Card 3",
      image: "url_to_image_3.jpg",
    },
    // Add more card data as needed
  ];

  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/Consultation');
  }
  return (

    <div className=" w-full text-center md:text-left lg:text-right">
      <section className=" w-full h-full bg-teal-50 sticky ">
        <div
          className="mx-3 mt-20 md:mt-5 md:mx-10 rounded-xl bg-teal-100 h-[229px]  text-left text-5xl text-black font-text-sm-font-semibold"
          id="search"
        >
          <div className=" flex-wrap md:flex flex-col items-start justify-start gap-[1px]">
            <div className="  mt-5  ml-10 leading-[150%] font-semibold inline-block w-[170px] h-[37px] shrink-0">
              Search Doctor
            </div>
            <div className="  ml-10 mt-2 text-sm leading-[150%] inline-block md:w-[374px] h-[37px] shrink-0">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className=" flex space-x-5 mt-8">
            <div className=" ml-3 w-28  md:w-96 md:ml-10 font-text-sm-font-semibold text-lg bg-white  rounded-sm box-border h-[50px]  border-[1px] border-solid border-teal-400 ">
              <DropDown currentMode={currentMode} />
            </div>{" "}
            <div className="   w-2/4    font-text-sm-font-semibold text-lg bg-white   rounded-sm box-border  h-[50px]  border-[1px] border-solid border-teal-400    ">
              <DropDown1 currentMode={currentMode} />
            </div>
          </div>
          <div class="relative top-0px bottom-[55px] bg-teal-300">

          
    </div>
  
        </div>
      </section>
      <section className=" flex-wrap md:flex">
        {/*overflow-scroll flex no-scrollbar*/}
        {home1.map((x, index) => {
          return (
            <div
              className=" mx-3 w-11/12 rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)]  flex flex-row items-center mt-10 md:mx-10 md:w-2/5 border-[1px] border-solid border-green-50 flex-shrink-0 n"
              id="card"
            >
              <div className="  flex flex-row items-center justify-start gap-[13px]">
                <img
                  className="relative w-2/4 md:w-[230px] h-[228px]  bg-cover"
                  alt="by"
                  src={doctor}
                 
                />
                <div className="  flex  flex-col items-start justify-start gap-[34px]">
                  <div className="relative font-medium inline-block  w-28 md:w-[150px] ">
                    {x.header}
                  </div>
                  <div className=" relative text-base leading-[150%] font-light inline-block w-28 md:w-[157px] h-[57px] shrink-0">
                    {x.dec}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section
          className=" mx-5 flex flex-col mt-36 items-start justify-start gap-[70px] text-left      text-17xl text-teal-500 font-text-sm-font-semibold "
            id="page2"
          >
          <div className="  w-full md:flex flex-col items-start justify-start" id="name">
          <b className="relative leading-[150%]">
            Consult top doctors online for any health concern
          </b>
          <div className="w-full md:relative mt-5 md:mt-0  text-xl md:text-5xl leading-[150%] text-teal-800 inline-block md:w-[728px] h-[68px] shrink-0">
            Private online consultations with verified doctors in all
            specialists
          </div>
        </div>

        <div
          className=" flex-wrap md:flex gap-5 items-start justify-around  text-left text-base text-black font-text-sm-font-semibold   w-full"
          id="horicard"
         >
          <div className=" mx-7 md:mx-0  mt-0 md:mt-0  relative w-[235.79px] h-[331.97px] " id="Hcard1">
            <div className=" absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[257px] left-[56px] w-[123px] h-[39px]"
                autoFocus={true}
                id="hcard"
              >
                <div className="absolute top-[0px] left-[0px] rounded-[36px] bg-teal-400 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" onClick={navigateToContacts} />
                <div className="absolute top-[8px] left-[11px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-white text-left inline-block w-[101px]">
                  Consult Now
                </div>
              </button>
              <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                Periods or Pregnancy
              </div>
            </div>
            <img
              className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
              alt="hiii"
              src={pregnancy}
             
            />
          </div>
            <div className=" mx-7 md:mx-0  mt-5 md:mt-0  relative w-[235.79px] h-[331.97px] " id="Hcard1">
            <div className=" absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[257px] left-[56px] w-[123px] h-[39px]"
                autoFocus={true}
                id="hcard"
              >
                <div className="absolute top-[0px] left-[0px] rounded-[36px] bg-teal-400 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" onClick={navigateToContacts}/>
                <div className="absolute top-[8px] left-[11px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-white text-left inline-block w-[101px]">
                  Consult Now
                </div>
              </button>
              <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                  Acne or Skin Problem
              </div>
            </div>
            <img
              className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
              alt=""
              src={acne}
             
            />
          </div>

          
           <div className=" mx-7 md:mx-0  mt-5 md:mt-0 relative w-[235.79px] h-[331.97px] " id="Hcard1">
            <div className=" absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[257px] left-[56px] w-[123px] h-[39px]"
                autoFocus={true}
                id="hcard"
              >
                <div className="absolute top-[0px] left-[0px] rounded-[36px] bg-teal-400 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" onClick={navigateToContacts} />
                <div className="absolute top-[8px] left-[11px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-white text-left inline-block w-[101px]">
                  Consult Now
                </div>
              </button>
              <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                  Acne or Skin Problem
              </div>
            </div>
            <img
              className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
              alt=""
              src={acne}
             
            />
          </div>
          
          
           <div className="mx-7 md:mx-0  mt-5 md:mt-0  relative w-[235.79px] h-[331.97px] " id="Hcard1">
            <div className="absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50">
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[257px] left-[56px] w-[123px] h-[39px]"
                autoFocus={true}
                id="hcard"
              >
                <div className="absolute top-[0px] left-[0px] rounded-[36px] bg-teal-400 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" onClick={navigateToContacts} />
                <div className="absolute top-[8px] left-[11px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-white text-left inline-block w-[101px]">
                  Consult Now
                </div>
              </button>
              <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                  Baby not feeling well
              </div>
            </div>
            <img
              className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
              alt=""
              src={pregnancy}
             
            />
          </div>
          
          
        </div>
      </section>
      <div className="relative bg-white w-full h-[503px] overflow-hidden">
      <div className="   absolute top-[112px] left-[58px] w-[1325px] h-[304.73px]">
        <section
          className="absolute top-[0px] left-[0px]  w-[220px] h-[236.22px] text-left text-[64px] text-cadetblue font-sofia-sans"
          id="nameqote"
        >
          <div className=" ml-16 md:ml-0 absolute top-[0px] left-[0px] font-extrabold">
            <p className="m-0">Take Care Of</p>
            <p className="m-0">Your Life</p>
            <p className="m-0"></p>
          </div>
        </section>
        <main
          className=" ml-40 md:ml-0 absolute left-[250px] h-[304.73px] flex flex-row items-start justify-start gap-[62px]"
          id="feature"
        >
          <section
            className="flex flex-col items-start justify-start gap-[106px] text-left text-5xl text-darkslategray font-sofia-sans"
            id="2sec"
          >
            <div
              className="w-[350px] flex flex-row items-start justify-start gap-[30px]"
              id="sec1"
            >
              <img className="relative w-9 h-10" alt="" src={Vector} />
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch relative font-medium">
                  Book an appointment
                </div>
                <div className="self-stretch relative text-base font-light text-slategray">
                  Book an appointment with a doctor to discuss health concerns
                  and receive treatment.
                </div>
              </div>
            </div>
            <div
              className="w-[350px] flex flex-row items-start justify-start gap-[30px]"
              id="sec2"
            >
              <img
                className="relative w-[41.27px] h-10"
                alt=""
                src={Vector2}
              />
              <section className="flex-1 h-24 flex flex-col items-start justify-start gap-[10px] text-left text-5xl text-darkslategray font-sofia-sans">
                <div className="self-stretch relative font-medium">
                  Buy Medicines
                </div>
                <div className="self-stretch relative text-base font-light text-slategray">
                  We ensure our customers get 100% genuine medicines with the
                  highest savings in the shortest time possible.
                </div>
              </section>
            </div>
          </section>
          <section
            className="flex flex-col items-start justify-start gap-[106px] text-left text-5xl text-darkslategray font-sofia-sans"
            id="sec4"
          >
            <div
              className="w-[350px] flex flex-row items-start justify-start gap-[30px]"
              id="sec3"
            >
              <img
                className="relative w-[35.38px] h-10"
                alt=""
                src={Vector3}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch relative font-medium">
                  Track your medical recrods
                </div>
                <div className="self-stretch relative text-base font-light text-slategray">
                  Your medical records are managed in a digital format and
                  shared only with authorized healthcare with your consent.
                </div>
              </div>
            </div>
            <div
              className="w-[350px] flex flex-row items-start justify-start gap-[30px]"
              id="sec4"
            >
              <img
                className="relative w-[41.9px] h-10"
                alt=""
                src={Vector4}
              />
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch relative font-medium">
                  Book lab tests
                </div>
                <div className="self-stretch relative text-base font-light text-slategray">
                  Book an appointment with a doctor to discuss health concerns
                  and receive treatment.
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>

      <main
        className=" mx-10 mt-36 flex flex-col items-start justify-start gap-[75px]"
        id="page4"
      >
        <section
          className=" flex-wrap md:w-[947px] flex flex-col items-start justify-start text-left text-17xl text-teal-500 font-text-sm-font-semibold"
          id="bookappoint "
        >
          <div className=" self-stretch relative h-[117px]">
            <b className="  w-full md:inline-block md:w-[947px]">
              Book an appointment with a doctor
            </b>
            <div className=" mt-5 md:mt-0  w-full text-xl md:text-5xl text-teal-800 inline-block ">
              Book appointments and received experienced doctor insight from
              various medical fields.
            </div>
          </div>
        </section>{/*
        <div className="  mt-72  md:mt-5 flex-wrap md:flex justify-around gap-[75px]">
        <div
          className="flex flex-row items-center justify-start gap-[31px] text-left text-base text-teal-800 font-text-sm-font-semibold"
          id="dccard"
        >
          <div
            className="relative   md:w-[406px] h-[234px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)]  "
            id="Dcard1"
          >
            <div className=" top-[0px] left-[0px] rounded-9xl w-[406px] h-[234px] overflow-hidden  bg-cover bg-no-repeat bg-[top]">
              <div className="absolute top-[180px] left-[255px] w-[136px] h-[39px] text-white">
                <div className="absolute top-[0px] left-[0px] w-[136px] flex flex-col items-start justify-start">
                  <div className="relative rounded-2xs bg-teal-400   box-border w-[136px] h-[39px] border-[1px] border-solid border-teal-500" />
                </div>
                <div className="absolute top-[8px] left-[20px] flex flex-row items-start justify-start">
                  <div className="relative leading-[150%] font-semibold inline-block w-[82px] shrink-0">
                    Book Now
                  </div>
                  <img
                    className="relative  w-3 md:w-6 h-6 "
                    alt=""
                    src={dentist}
                  />
                </div>
              </div>
              <div className="absolute top-[10px] left-[261px] rounded-3xs bg-pink-100 w-[135px] h-[37px] flex flex-row items-center justify-center py-0.5 px-3 box-border text-center text-lg text-pink-900">
                <div className="relative leading-[150%] font-medium">
                  Dentist
                </div>
              </div>
            </div>
            <img
              className="absolute top-[6px] left-[5px] w-[232px] h-[222.23px] object-cover"
              alt=""
              src={dentist}
            />
          </div>
        </div>
        
        <div
          className="flex flex-row items-center justify-start gap-[31px] text-left text-base text-teal-800 font-text-sm-font-semibold"
          id="dccard"
        >
          <div
            className="relative w-[406px] h-[234px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)]  "
            id="Dcard1"
          >
            <div className=" top-[0px] left-[0px] rounded-9xl w-[406px] h-[234px] overflow-hidden  bg-cover bg-no-repeat bg-[top]">
              <div className="absolute top-[180px] left-[255px] w-[136px] h-[39px] text-white">
                <div className="absolute top-[0px] left-[0px] w-[136px] flex flex-col items-start justify-start">
                  <div className="relative rounded-2xs bg-teal-400   box-border w-[136px] h-[39px] border-[1px] border-solid border-teal-500" />
                </div>
                <div className="absolute top-[8px] left-[20px] flex flex-row items-start justify-start">
                  <div className="relative leading-[150%] font-semibold inline-block w-[82px] shrink-0">
                    Book Now
                  </div>
                  <img
                    className="relative w-6 h-6 overflow-hidden shrink-0"
                    alt=""
                    src={dentist}
                  />
                </div>
              </div>
              <div className="absolute top-[10px] left-[261px] rounded-3xs bg-pink-100 w-[135px] h-[37px] flex flex-row items-center justify-center py-0.5 px-3 box-border text-center text-lg text-pink-900">
                <div className="relative leading-[150%] font-medium">
                  Dentist
                </div>
              </div>
            </div>
            <img
              className="absolute top-[6px] left-[5px] w-[232px] h-[222.23px] object-cover"
              alt=""
              src={dentist}
            />
          </div>
        </div>
         
        </div> */}
      </main>


      <div>
        <div className="relative bg-white w-full h-[512px] overflow-hidden text-left text-[32px] text-teal-800 font-inter">
      <div className="absolute top-[54px] left-[40px] w-[1068.05px] h-[458px]">
        <div className="absolute top-[0px] left-[326px] font-medium">
          What our users have to say
        </div>
        <img
          className="absolute top-[203px] left-[10px] w-[37.05px] h-[60px]"
          alt=""
          src={Vector5}
        />
        <div className="absolute top-[48px] left-[241.05px] w-[585.9px] h-[410px] text-center text-5xl text-cadetblue font-sofia-sans">
        <div className="absolute top-[74px] left-[-0.05px] w-[585.9px] flex flex-col items-start justify-start">
          <div className="self-stretch relative font-semibold">
            Ankit Choudhary
          </div>
        </div>
        <div className="absolute top-[141px] left-[-.05px] font-light text-darkslategray inline-block w-[585.9px]">
          Very easy to book, maintain history. Hassle free from older versions
          of booking appointment via telephone. Thanks Practo for making it
          simple.
        </div>
      </div>
      <img
        className="absolute top-[203px] left-[900px] w-[37.05px] h-[60px]"
        alt=""
        src={Vector6}
      />
    </div>
  </div>
    </div>
    <div>
         <div className="relative bg-white w-full h-[483px] overflow-hidden">
      <div className="absolute top-[28px] left-[-2px] w-[1591.2px] h-[455px]">
        <section
          className="absolute top-[112px] left-[88.14px] rounded-[10px] bg-teal-50 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row items-start justify-center py-5 px-[73px] box-border text-left text-17xl text-cadetblue font-sofia-sans"
          id="stat"
        >
          <div className="w-[300px] h-[119px] flex flex-col items-end justify-end py-[18px] px-[157px] box-border">
            <div className="flex flex-row items-start justify-start gap-[24px]">
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="relative font-extrabold">100</div>
                <div className="relative text-5xl font-medium text-darkslategray">
                  Doctors
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="relative font-extrabold">750</div>
                <div className="relative text-5xl font-medium text-darkslategray">
                  Patients
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="relative font-extrabold">250</div>
                <div className="relative text-5xl font-medium text-darkslategray">
                  Lab Tests
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[10px]">
                <div className="relative font-extrabold">1000+</div>
                <div className="relative text-5xl font-medium text-darkslategray">
                  Medicines Sold
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="absolute top-[0px] left-[185.14px] w-[408px] h-[455px]">
          <img
            className="absolute top-[-28px] left-[-79px] w-[250px] h-[300px] object-cover"
            alt=""
            src={See}
          />
        </div>
        <img
          className="absolute top-[108px] left-[940.14px] w-[110.86px] h-[200.68px] object-cover opacity-[0.85]"
          alt=""
          src={Tablet}
        />
        <img
          className="absolute top-[85.4px] left-[20px] w-[90.81px] h-[100.68px] object-cover opacity-[0.85]"
          alt=""
          src={jec}
        />
      </div>
    </div>
      </div>
     
     <div>
      <div className="relative bg-white w-full h-[809px] overflow-hidden text-left text-xl text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[809px] object-cover opacity-[0.23]"
        alt=""
        src={Mob}
      />
      <div className="absolute top-[35px] left-[110px] w-[1389px] h-[740px]">
        <div className="absolute top-[0px] left-[649px] w-[740px] h-[740px]">
          <div className="absolute top-[0px] left-[0px] w-[740px] h-[740px]">
            <img
              className="absolute top-[0px] left-[50px] w-[500px] h-[500px] object-cover"
              alt=""
              src={Mobile}
            />
            <img
              className="absolute top-[19px] left-[350px] w-[147px] h-[131px] object-cover"
              alt=" hii"
              src={Mob}
            />
          </div>
        </div>
        <div className="absolute top-[106px] left-[30px] w-[706px] h-[215.85px] text-[38px] text-teal-800">
          <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start">
            <b className="relative inline-block w-[664.12px] h-[87.43px] shrink-0">
              <p className="m-0">Download the CareChainAI</p>
            </b>
            <div className="relative text-xl  left-[0px] text-teal-900 inline-block w-[600px] h-[128.42px] shrink-0">
              Access video consultation with India’s top doctors on the
              CareChainAI app. Connect with doctors online, available 24/7, from
              the comfort of your home.
            </div>
          </div>
        </div>
        <div className="absolute top-[396px] left-[0px] rounded bg-white box-border w-[408px] h-[68px] overflow-hidden text-gray-400 border-[1px] border-solid border-teal-700">
          <div className="absolute top-[0.5px] left-[98.5px] box-border w-px h-[67px] border-r-[1px] border-solid border-teal-800" />
          <div className="absolute top-[22px] left-[26px] inline-block w-[38px] h-6">
            +91
          </div>
          <div className="absolute top-[22px] left-[173px] inline-block w-[129px] h-6">
            7025655451
          </div>
         
        </div>
        <div className="absolute top-[351px] left-[30px] font-semibold text-black">
          Get the link to download the app
        </div>
        <div className="absolute top-[396px] left-[428px] rounded bg-teal-700 box-border w-[122px] h-[68px] overflow-hidden border-[1px] border-solid border-teal-800">
          <div className="absolute top-[22px] left-[35px] font-semibold inline-block w-[52px] h-6">
            Send
          </div>
        </div>
        <div className="absolute top-[520px] left-[50px] rounded-[46px] bg-black overflow-hidden flex flex-col items-start justify-start py-2.5 px-[26px] text-[12px] border-[1px] border-solid border-white">
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <img
              className="relative w-[21px] h-[23px] overflow-hidden shrink-0"
              alt=""
              src={play}
            />
            <div className="relative w-[87px] h-9">
              <div className="absolute top-[0px] left-[0px]">GET IT ON</div>
              <div className="absolute top-[18px] left-[0px] text-[15px] font-semibold">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>

     
     <div className="relative bg-teal-100 w-full h-[380px] overflow-hidden text-left text-5xl text-gray-900 font-text-2xl-font-semibold">
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


export default Patient_Dashboard;
