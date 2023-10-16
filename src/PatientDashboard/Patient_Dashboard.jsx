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
import jec from "../data/PatientData/jec.jpg";
import See from "../data/PatientData/See.jpg";
import Mob from "../data/PatientData/Mob.jpg";
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
    <div>
      <section className="  h-full bg-teal-50 sticky ">
        <div
          className=" mt-5 mx-10 rounded-xl bg-teal-200 h-[229px]  text-left text-5xl text-black font-text-sm-font-semibold"
          id="search"
        >
          <div className="  flex flex-col items-start justify-start gap-[1px]">
            <div className=" mt-5 ml-10 leading-[150%] font-semibold inline-block w-[170px] h-[37px] shrink-0">
              Search Doctor
            </div>
            <div className=" ml-10 mt-2 text-sm leading-[150%] inline-block w-[374px] h-[37px] shrink-0">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className=" flex space-x-5 mt-8">
            <div className="   w-96 ml-10 font-text-sm-font-semibold text-lg bg-white  rounded-sm box-border h-[50px]  border-[1px] border-solid border-teal-400 ">
              <DropDown currentMode={currentMode} />
            </div>{" "}
            <div className="   w-2/4    font-text-sm-font-semibold text-lg bg-white   rounded-sm box-border  h-[50px]  border-[1px] border-solid border-teal-400    ">
              <DropDown1 currentMode={currentMode} />
            </div>
          </div>
          <div class="relative">
  <div class="absolute top-0 left-1069 w-246 h-229 object-cover opacity-85">
          <img
            className=" top-[0px] left-[1069px] w-10 h-10 object-cover opacity-[0.85]"
            alt="hii"
            src={medical}
          />
    </div>
   </div>  
        </div>
      </section>
      <section className=" flex">
        {/*overflow-scroll flex no-scrollbar*/}
        {home1.map((x, index) => {
          return (
            <div
              className=" rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)]  flex flex-row items-center mt-10 mx-10 w-2/5 border-[1px] border-solid border-green-50 flex-shrink-0 n"
              id="card"
            >
              <div className="flex flex-row items-center justify-start gap-[13px]">
                <img
                  className="relative w-[230px] h-[228px] object-cover"
                  alt="by"
                  src={doctor}
                 
                />
                <div className="flex flex-col items-start justify-start gap-[34px]">
                  <div className="relative leading-[150%] font-medium inline-block w-[217px]">
                    {x.header}
                  </div>
                  <div className="relative text-base leading-[150%] font-light inline-block w-[217px] h-[57px] shrink-0">
                    {x.dec}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section
          className=" mx-10 flex flex-col mt-36 items-start justify-start gap-[70px] text-left      text-17xl text-teal-500 font-text-sm-font-semibold "
            id="page2"
          >
          <div className="flex flex-col items-start justify-start" id="name">
          <b className="relative leading-[150%]">
            Consult top doctors online for any health concern
          </b>
          <div className="relative text-5xl leading-[150%] text-teal-800 inline-block w-[728px] h-[68px] shrink-0">
            Private online consultations with verified doctors in all
            specialists
          </div>
        </div>

        <div
          className="flex gap-5 items-start justify-around  text-left text-base text-black font-text-sm-font-semibold   w-full"
          id="horicard"
         >
          <div className="  relative w-[235.79px] h-[331.97px] " id="Hcard1">
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
                Periods or Pregnancy
              </div>
            </div>
            <img
              className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
              alt="hiii"
              src={pregnancy}
             
            />
          </div>
            <div className="  relative w-[235.79px] h-[331.97px] " id="Hcard1">
            <div className="absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50">
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

          
           <div className="  relative w-[235.79px] h-[331.97px] " id="Hcard1">
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
                  Acne or Skin Problem
              </div>
            </div>
            <img
              className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
              alt=""
              src={acne}
             
            />
          </div>
          
          
           <div className="  relative w-[235.79px] h-[331.97px] " id="Hcard1">
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
      <div className="absolute top-[112px] left-[58px] w-[1325px] h-[304.73px]">
        <section
          className="absolute top-[0px] left-[0px] w-[120px] h-[236.22px] text-left text-[64px] text-cadetblue font-sofia-sans"
          id="nameqote"
        >
          <div className="absolute top-[0px] left-[0px] font-extrabold">
            <p className="m-0">Take Care Of</p>
            <p className="m-0">Your Life</p>
            <p className="m-0"></p>
          </div>
        </section>
        <main
          className="absolute top-[0px] left-[250px] h-[304.73px] flex flex-row items-start justify-start gap-[62px]"
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
          className="w-[947px] flex flex-col items-start justify-start text-left text-17xl text-teal-500 font-text-sm-font-semibold"
          id="bookappoint"
        >
          <div className="self-stretch relative h-[117px]">
            <b className="  inline-block w-[947px]">
              Book an appointment with a doctor
            </b>
            <div className="  text-5xl text-teal-800 inline-block w-[947px]">
              Book appointments and received experienced doctor insight from
              various medical fields.
            </div>
          </div>
        </section>
        <div className="flex justify-around">
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
         
        </div>
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
          <div className="w-[1000px] h-[119px] flex flex-col items-end justify-end py-[18px] px-[157px] box-border">
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
            className="absolute top-[-28px] left-[-79px] w-[300px] h-[300px] object-cover"
            alt=""
            src={See}
          />
        </div>
        <img
          className="absolute top-[108px] left-[1350.14px] w-[110.86px] h-[200.68px] object-cover opacity-[0.85]"
          alt=""
          src={Tablet}
        />
        <img
          className="absolute top-[85.4px] left-[20px] w-[110.81px] h-[200.68px] object-cover opacity-[0.85]"
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
              alt="hiiii"
              src={Mobile}
            />
            <img
              className="absolute top-[16px] left-[350px] w-[147px] h-[131px] object-cover"
              alt=" hii"
              src="amit.jpg"
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
              src="/logosgoogleplayicon.svg"
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
        <img className="relative w-8 h-8" alt="" src="/logo.svg" />
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
        className="absolute top-[0px] left-[1249px] w-[191px] h-[274.43px] object-cover opacity-[0.85]"
        alt=""
        src={jec}
      />
    </div>
    </div>
  );
};


export default Patient_Dashboard;

/*

<section>

 <div className="h-[4091px] flex flex-row items-start justify-start relative gap-[8px] text-left text-xl text-black font-text-sm-font-semibold">
      <div className="relative bg-white w-[1440px] h-[4471px] overflow-hidden shrink-0 z-[0]">
        <img
          className="absolute top-[3282px] left-[0px] w-[1440px] h-[809px] object-cover opacity-[0.23]"
          alt=""
          src="/image-15@2x.png"
        />
        <img
          className="absolute top-[687px] left-[0px] w-[1440px] h-[851.46px] object-cover opacity-[0.32]"
          alt=""
          src="/9496304-1@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-lightcyan w-[1440px] h-[705px] overflow-hidden">
          <div className="absolute top-[153px] left-[63px] w-[488px]" />
          <div
            className="absolute top-[440px] left-[63px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)]  flex flex-row items-center justify-center border-[1px] border-solid border-green-50"
            id="card"
          >
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative w-[287px] h-[228px] object-cover"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[34px]">
                <div className="relative leading-[150%] font-medium inline-block w-[217px]">
                  Instant Video Consultation
                </div>
                <div className="relative text-base leading-[150%] font-light inline-block w-[217px] h-[57px] shrink-0">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[440px] left-[614px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-green-50"
            id="card2"
          >
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative w-[287px] h-[228px] object-cover"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[34px]">
                <div className="relative leading-[150%] font-medium inline-block w-[217px]">
                  Instant Video Consultation
                </div>
                <div className="relative text-base leading-[150%] font-light inline-block w-[217px] h-[57px] shrink-0">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-[440px] left-[1165px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[600px] overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-green-50"
            id="card3"
          >
            <div className="flex flex-row items-center justify-start gap-[13px]">
              <img
                className="relative w-[287px] h-[228px] object-cover"
                alt=""
                src="/image-3@2x.png"
              />
              <div className="relative rounded-[88px] bg-teal-300 w-[70px] h-[70px] overflow-hidden shrink-0" />
              <div className="flex flex-col items-start justify-start gap-[34px]">
                <div className="relative leading-[150%] font-medium inline-block w-[217px]">
                  Instant Video Consultation
                </div>
                <div className="relative text-base leading-[150%] font-light inline-block w-[217px] h-[57px] shrink-0">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
            </div>
          </div>
          <section
            className="  rounded-xl bg-teal-200 w-[1315px] h-[229px]  text-left text-5xl text-black font-text-sm-font-semibold"
            id="search"
          >
            <div className="  flex flex-col items-start justify-start gap-[1px]">
              <div className="leading-[150%] font-semibold inline-block w-[170px] h-[37px] shrink-0">
                Search Doctor
              </div>
              <div className=" text-sm leading-[150%] inline-block w-[374px] h-[37px] shrink-0">
                Sorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <input
              className="font-text-sm-font-semibold text-lg bg-white  top-[140px] left-[31px] rounded-sm box-border w-[1005px] h-[57px]  border-[1px] border-solid border-teal-400"
              name="dropdown"
              value="Search doctors, clinics, hospitals, etc."
              placeholder="Mumbai"
              type="text"
              defaultValue="Search doctors, clinics, hospitals, etc."
            />
            <img
              className=" top-[0px] left-[1069px] w-[246px] h-[229px] object-cover opacity-[0.85]"
              alt=""
              src="/medical-history-2@2x.png"
            />
          </section>
        </div>
      
        <section
          className="absolute top-[749px] left-[59px] flex flex-col items-start justify-start gap-[70px] text-left text-17xl text-teal-500 font-text-sm-font-semibold"
          id="page2"
        >
          <div className="flex flex-col items-start justify-start" id="name">
            <b className="relative leading-[150%]">
              Consult top doctors online for any health concern
            </b>
            <div className="relative text-5xl leading-[150%] text-teal-800 inline-block w-[728px] h-[68px] shrink-0">
              Private online consultations with verified doctors in all
              specialists
            </div>
          </div> 
          <section
            className="flex flex-row items-start justify-start gap-[36px] text-left text-base text-black font-text-sm-font-semibold"
            id="horicard"
          >
            <div className="relative w-[235.79px] h-[331.97px]" id="Hcard1">
              <div className="absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50">
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[257px] left-[56px] w-[123px] h-[39px]"
                  autoFocus={true}
                  id="hcard"
                >
                  <div className="absolute top-[0px] left-[0px] rounded-[36px] bg-teal-400 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" />
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
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            <div
              className="relative rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden shrink-0 border-[1px] border-solid border-green-50"
              id="Hcard2"
            >
              <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                Acne or Skin Problem
              </div>
              <img
                className="absolute top-[8px] left-[19px] w-[203px] h-[182px] object-cover"
                alt=""
                src="/image-6@2x.png"
              />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[255px] left-[56px] w-[123px] h-[39px]"
                autoFocus={true}
                id="hcard2"
              >
                <div className="absolute top-[0px] left-[0px] rounded-2xs bg-teal-400 box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-500" />
                <div className="absolute top-[8px] left-[11px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-white text-left inline-block w-[101px]">
                  Consult Now
                </div>
              </button>
            </div>
            <div className="relative w-[235.79px] h-[331.97px]">
              <div
                className="absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50"
                id="Hcard3"
              >
                <div className="absolute top-[259px] left-[60px] rounded-mini bg-white box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-300" />
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[267px] left-[71px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-teal-800 text-left inline-block w-[101px]"
                  autoFocus={true}
                  id="hcard3"
                >
                  Consult Now
                </button>
                <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                  Baby not feeling well
                </div>
              </div>
              <img
                className="absolute top-[3px] left-[12.41px] w-[211px] h-[218px] object-cover"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="relative w-[235.79px] h-[331.97px]">
              <div
                className="absolute top-[0px] left-[0px] rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden border-[1px] border-solid border-green-50"
                id="card4"
              >
                <div className="absolute top-[259px] left-[60px] rounded-mini bg-white box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-300" />
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[267px] left-[71px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-teal-800 text-left inline-block w-[101px]"
                  autoFocus={true}
                  id="hcard4"
                >
                  Consult Now
                </button>
                <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                  Periods or Pregnancy
                </div>
              </div>
              <img
                className="absolute top-[8.3px] left-[0px] w-[235.79px] h-[206.44px] object-cover"
                alt=""
                src="/image-51@2x.png"
              />
            </div>
            <div
              className="relative rounded-mini bg-white shadow-[0px_1.7999999523162842px_4px_rgba(0,_0,_0,_0.25)] box-border w-[235.79px] h-[331.97px] overflow-hidden shrink-0 border-[1px] border-solid border-green-50"
              id="Hcard5"
            >
              <div className="absolute top-[259px] left-[60px] rounded-mini bg-white box-border w-[123px] h-[39px] overflow-hidden border-[1px] border-solid border-teal-300" />
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[267px] left-[71px] text-base leading-[150%] font-medium font-text-sm-font-semibold text-teal-800 text-left inline-block w-[101px]"
                autoFocus={true}
                id="hcard5"
              >
                Consult Now
              </button>
              <div className="absolute top-[217px] left-[40px] leading-[150%] inline-block w-[163px] h-[23px]">
                Acne or Skin Problem
              </div>
              <img
                className="absolute top-[8px] left-[19px] w-[203px] h-[182px] object-cover"
                alt=""
                src="/image-61@2x.png"
              />
            </div>
          </section>
        </section>
        <main
          className="absolute top-[1817px] left-[59px] flex flex-col items-start justify-start gap-[75px]"
          id="page4"
        >
          <section
            className="w-[947px] flex flex-col items-start justify-start text-left text-17xl text-teal-500 font-text-sm-font-semibold"
            id="bookappoint"
          >
            <div className="self-stretch relative h-[117px]">
              <b className="absolute top-[0px] left-[0px] inline-block w-[947px]">
                Book an appointment with a doctor
              </b>
              <div className="absolute top-[52px] left-[0px] text-5xl text-teal-800 inline-block w-[947px]">
                Book appointments and received experienced doctor insight from
                various medical fields.
              </div>
            </div>
          </section>
          <section
            className="flex flex-row items-center justify-start gap-[31px] text-left text-base text-teal-800 font-text-sm-font-semibold"
            id="dccard"
           >
            <div className="relative w-[406px] h-[234px]" id="Dcard1">
              <div className="absolute top-[0px] left-[0px] rounded-9xl w-[406px] h-[234px] overflow-hidden  bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[267px] left-[71px] leading-[150%] font-medium inline-block w-[101px]">
                  Consult Now
                </div>
                <div className="absolute top-[180px] left-[255px] w-[136px] h-[39px] text-white">
                  <div className="absolute top-[0px] left-[0px] w-[136px] flex flex-col items-start justify-start">
                    <div className="relative rounded-2xs bg-teal-400 box-border w-[136px] h-[39px] border-[1px] border-solid border-teal-500" />
                  </div>
                  <div className="absolute top-[8px] left-[20px] flex flex-row items-start justify-start">
                    <div className="relative leading-[150%] font-semibold inline-block w-[82px] shrink-0">
                      Book Now
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright2.svg"
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
                src="/image-9@2x.png"
              />
            </div>
            <div className="relative w-[407px] h-[234px]" id="Dcard2">
              <div className="absolute top-[0px] left-[1px] rounded-9xl w-[406px] h-[234px] overflow-hidden  bg-cover bg-no-repeat bg-[top]">
                <div className="absolute top-[267px] left-[71px] leading-[150%] font-medium inline-block w-[101px]">
                  Consult Now
                </div>
                <div className="absolute top-[180px] left-[255px] w-[136px] h-[39px] text-white">
                  <div className="absolute top-[0px] left-[0px] w-[136px] flex flex-col items-start justify-start">
                    <div className="relative rounded-2xs bg-teal-400 box-border w-[136px] h-[39px] border-[1px] border-solid border-teal-500" />
                  </div>
                  <div className="absolute top-[8px] left-[20px] flex flex-row items-start justify-start">
                    <div className="relative leading-[150%] font-semibold inline-block w-[82px] shrink-0">
                      Book Now
                    </div>
                    <img
                      className="relative w-6 h-6 overflow-hidden shrink-0"
                      alt=""
                      src="/arrowright2.svg"
                    />
                  </div>
                </div>
                <div className="absolute top-[11px] left-[261px] rounded-3xs bg-purple-100 w-[135px] h-[37px] flex flex-row items-center justify-center py-0.5 px-3 box-border text-center text-lg text-purple-800">
                  <div className="relative leading-[150%] font-medium">
                    Gynecologist
                  </div>
                </div>
              </div>
              <img
                className="absolute top-[14px] left-[0px] w-[269.16px] h-[219.84px] object-cover"
                alt=""
                src="/image-10@2x.png"
              />
            </div>
            <div className="relative w-[406px] h-[234px]" id="Dcard3">
              <div className="absolute top-[0px] left-[0px] w-[406px] h-[234px]">
                <div className="absolute top-[0px] left-[0px] rounded-9xl w-[406px] h-[234px] overflow-hidden  bg-cover bg-no-repeat bg-[top]">
                  <div className="absolute top-[267px] left-[71px] leading-[150%] font-medium inline-block w-[101px]">
                    Consult Now
                  </div>
                  <div className="absolute top-[180px] left-[255px] w-[136px] h-[39px] text-white">
                    <div className="absolute top-[0px] left-[0px] w-[136px] flex flex-col items-start justify-start">
                      <div className="relative rounded-2xs bg-teal-400 box-border w-[136px] h-[39px] border-[1px] border-solid border-teal-500" />
                    </div>
                    <div className="absolute top-[8px] left-[20px] flex flex-row items-start justify-start">
                      <div className="relative leading-[150%] font-semibold inline-block w-[82px] shrink-0">
                        Book Now
                      </div>
                      <img
                        className="relative w-6 h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/arrowright2.svg"
                      />
                    </div>
                  </div>
                  <div className="absolute top-[10px] left-[276px] rounded-3xs bg-green-100 w-[120px] h-[37px] flex flex-row items-center justify-center py-0.5 px-3 box-border text-center text-lg text-green-800">
                    <div className="relative leading-[150%] font-medium">
                      Dietitian
                    </div>
                  </div>
                </div>
                <div className="absolute top-[6px] left-[5px] w-[232px] h-[222.23px]" />
              </div>
              <img
                className="absolute top-[6px] left-[5px] w-[262px] h-[222px] object-cover"
                alt=""
                src="/image-12@2x.png"
              />
            </div>
            <div className="relative rounded-2xs bg-green-50 box-border w-[50px] h-[50px] border-[1px] border-solid border-teal-300">
              <div className="absolute top-[13px] left-[13px] w-6 h-6 flex flex-row items-start justify-start">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright3.svg"
                />
              </div>
            </div>
          </section>
        </main>
        <div className="absolute top-[2340px] left-[512px] text-[32px] font-medium text-teal-800">
          What our users have to say
        </div>
        <main
          className="absolute top-[2379px] left-[360px] w-[720px] h-[410px]"
          id="message"
        />
        <div className="absolute top-[2388px] left-[194px] w-[818.95px] h-[410px] text-center text-5xl text-cadetblue font-sofia-sans">
          <img
            className="absolute top-[155px] left-[-8px] w-[37.05px] h-[60px]"
            alt=""
            src="/vector.svg"
          />
          <div className="absolute top-[0px] left-[233.05px] w-[585.9px] h-[410px]">
            <div className="absolute top-[74px] left-[-0.05px] w-[585.9px] flex flex-col items-start justify-start">
              <div className="self-stretch relative font-semibold">
                Ankit Choudhary
              </div>
            </div>
            <div className="absolute top-[141px] left-[-0.05px] font-light text-darkslategray inline-block w-[585.9px]">
              Very easy to book, maintain history. Hassle free from older
              versions of booking appointment via telephone. Thanks Practo for
              making it simple.
            </div>
          </div>
          <img
            className="absolute top-[155px] left-[1023px] w-[37.05px] h-[60px]"
            alt=""
            src="/vector1.svg"
          />
        </div>
        <section
          className="absolute top-[2856px] left-[0px] rounded-3xs bg-teal-50 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] flex flex-row items-start justify-center py-5 px-[73px] box-border text-left text-17xl text-cadetblue font-sofia-sans"
          id="stat"
        >
          <div className="w-[1304px] h-[119px] flex flex-col items-end justify-end py-[18px] px-[157px] box-border">
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
        <div className="absolute top-[2744px] left-[97px] w-[408px] h-[455px]">
          <img
            className="absolute top-[-94px] left-[-79px] w-[598px] h-[598px] object-cover"
            alt=""
            src="/image-4@2x.png"
          />
        </div>
        <img
          className="absolute top-[2852px] left-[1262px] w-[178px] h-[286.68px] object-cover opacity-[0.85]"
          alt=""
          src="/tablet-strip-1@2x.png"
        />
        <img
          className="absolute top-[2829.4px] left-[0px] w-[186.67px] h-[294.68px] object-cover opacity-[0.85]"
          alt=""
          src="/syringe-1@2x.png"
        />
        <img
          className="absolute top-[3282px] left-[746px] w-[740px] h-[740px] object-cover"
          id="mobile"
          alt=""
          src="/frame-28@2x.png"
        />
        <div
          className="absolute top-[3388px] left-[97px] flex flex-col items-start justify-start text-[38px] text-teal-800"
           id="download"
         >
          <b className="relative inline-block w-[664.12px] h-[87.43px] shrink-0">
            <p className="m-0">Download the CareChainAI</p>
          </b>
          <div className="relative text-xl text-teal-900 inline-block w-[706px] h-[128.42px] shrink-0">
            Access video consultation with India’s top doctors on the
            CareChainAI app. Connect with doctors online, available 24/7, from
            the comfort of your home.
          </div>
         </div>
         <div className="absolute top-[3678px] left-[97px] rounded bg-white box-border w-[408px] h-[68px] overflow-hidden text-gray-400 border-[1px] border-solid border-teal-700">
          <div className="absolute top-[0.5px] left-[98.5px] box-border w-px h-[67px] border-r-[1px] border-solid border-teal-800" />
          <div className="absolute top-[22px] left-[26px] inline-block w-[38px] h-6">
            +91
          </div>
          <div className="absolute top-[22px] left-[173px] inline-block w-[129px] h-6">
            7025655451
          </div>
         </div>
         <div className="absolute top-[3633px] left-[97px] font-semibold">
          Get the link to download the app
         </div>
         <div className="absolute top-[3678px] left-[525px] rounded bg-teal-700 box-border w-[122px] h-[68px] overflow-hidden text-white border-[1px] border-solid border-teal-800">
          <div className="absolute top-[22px] left-[35px] font-semibold inline-block w-[52px] h-6">
            Send
          </div>
         </div>
         <div className="absolute top-[3802px] left-[97px] rounded-[46px] bg-teal-700 box-border w-[157px] h-[57px] overflow-hidden border-[1px] border-solid border-teal-800" />
             <footer
          className="absolute top-[4091px] left-[0px] w-[1440px] h-[380px] text-left text-5xl text-gray-900 font-text-sm-font-semibold"
          id="footer"
        >
          <div className="absolute top-[0px] left-[0px] bg-teal-100 w-[1440px] h-[380px] overflow-hidden">
            <img
              className="absolute top-[108px] left-[0px] w-[173.81px] h-[272px] object-cover opacity-[0.85]"
              alt=""
              src="/syringe-11@2x.png"
            />
            <img
              className="absolute top-[0px] left-[1249px] w-[191px] h-[274.43px] object-cover opacity-[0.85]"
              alt=""
              src="/syringe-12@2x.png"
            />
            <div className="absolute top-[67px] left-[335px] w-[771px] h-[241px] overflow-hidden">
              <div className="absolute top-[205px] left-[290px] flex flex-row items-center justify-start gap-[12px]">
                <img className="relative w-8 h-8" alt="" src="/logo2.svg" />
                <div className="relative leading-[150%] font-semibold">
                  CareChainAI
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] w-[771px] h-[170px] text-base text-blue-900">
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
                <div className="absolute top-[98px] left-[261px] leading-[150%] font-semibold inline-block w-[116px]">
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
            </div>
          </div>
          <div className="absolute top-[319.16px] left-[419px] leading-[150%] font-semibold text-blue-800 inline-block w-[601px] h-[35.91px]">
            Copyright © 2023, CareChainAi. All rights reserved.
          </div>
        </footer>
      </div>
      <section
        className="absolute my-0 mx-[!important] top-[1428.23px] left-[59px] w-[478px] h-[236.22px] z-[1] text-left text-[64px] text-cadetblue font-sofia-sans"
        id="nameqote"
      >
        <div className="absolute top-[0px] left-[0px] font-extrabold">
          <p className="m-0">Protect Your Life</p>
          <p className="m-0">And Take Care Of</p>
          <p className="m-0">Your Health</p>
        </div>
      </section>
      <main
        className="my-0 mx-[!important] absolute top-[1393.98px] left-[622px] h-[304.73px] flex flex-row items-start justify-start gap-[62px] z-[2]"
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
            <img className="relative w-9 h-10" alt="" src="/vector2.svg" />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-medium">
                Book an appointment
              </div>
              <div className="self-stretch relative text-base font-light text-slategray">
                Book an appointment with a doctor to discuss health concerns and
                receive treatment.
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
              src="/vector3.svg"
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
              src="/vector4.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-medium">
                Track your medical recrods
              </div>
              <div className="self-stretch relative text-base font-light text-slategray">
                Your medical records are managed in a digital format and shared
                only with authorized healthcare with your consent.
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
              src="/vector5.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch relative font-medium">
                Book lab tests
              </div>
              <div className="self-stretch relative text-base font-light text-slategray">
                Book an appointment with a doctor to discuss health concerns and
                receive treatment.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

















    <div className=" bg-white dark:bg-secondary-dark-bg h-full w-full ">
      <section className="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg  w-full h-full mt-5 mb-5 ">
        <div className="mt-10 md:h-full w-full bg-white dark:bg-secondary-dark-bg relative ">
          <div className="h-28 bg-white dark:bg-secondary-dark-bg flex justify-between items-center  ">
            <div className=" mt-10 w-screen space-x-4 bg-white dark:bg-secondary-dark-bg md:bg-white flex relative ml-10 mr-80  h-10 md:w-full md:space-x-4 ">
              <div className=" h-12  w-56  md:h-10  md:w-3/4 bg-white dark:bg-secondary-dark-bg ">
                <DropDown currentMode={currentMode} />
              </div>
              <div className="   w-8/12 md:h-10 md:w-full bg-white dark:bg-secondary-dark-bg  ">
                <DropDown1 currentMode={currentMode} />
              </div>
            </div>
          </div>
          <div className="h-96 bg-white dark:bg-secondary-dark-bg relative flex justify-between items-center">
            <div className='mt-10 h-3/4 w-full mx-1 w- bg-slate-800 rounded-2xl absolute bg-[url("https://s3.ap-southeast-1.amazonaws.com/www.practostatic.com/consumer-home/desktop/images/1597423628/chronic_consumer_banner_dweb.png")] bg-cover bg-center  '>
              <div className=" ml-28 mt-52 md:ml-44 md:mt-56">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Sign-Up Today"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg w-full  mb-5">
        <div className="  h-full w-full bg-white dark:bg-secondary-dark-bg ">
          <div className=" flex-wrap flex space-y-6 justify-center lg:flex space-x-5  lg:mt-5 ">
            <div className="ml-5 space-y-0.5 bg-transparent sm:h-72 sm:w-60 mt-5 rounded-2xl bg-white dark:bg-secondary-dark-bg w-full">
              <div className=' h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_instant_video_consulation.png")] bg-cover'></div>
              <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
                <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                  Instant Video Consultation
                </div>
                <div className="text-sm text-gray-400 h-9  text-center mt-2">
                  Connect within 60 sec
                </div>
              </div>
            </div>
            <div className="ml-5 space-y-0.5 bg-transparent  sm:h-72 sm:w-60  md:rounded-2xl bg-white dark:bg-secondary-dark-bg w-full">
              <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_find_doctors.png")] bg-cover'></div>
              <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
                <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                  Find Doctor Near You
                </div>
                <div className="text-sm text-gray-400 h-9  text-center mt-2">
                  Confirm appointment
                </div>
              </div>
            </div>
            <div className="ml-5 space-y-0.5 bg-transparent  md:h-72 md:w-60 rounded-2xl bg-white dark:bg-secondary-dark-bg w-full">
              <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_medicines.png")] bg-cover'></div>
              <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
                <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                  Medinice
                </div>
                <div className="text-sm text-gray-400 h-9  text-center mt-2">
                  Essential at your doorstep
                </div>
              </div>
            </div>
            <div className="ml-5 space-y-0.5 bg-transparent  md:h-72 md:w-60 rounded-2xl bg-white dark:bg-secondary-dark-bg w-full">
              <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_lab_tests.png")] bg-cover'></div>
              <div className=" h-24 w-60 rounded-b-2xl border-2 bg-white">
                <div className="h-15    text-center ml-5 mr-5 tracking-tight text-xl font-semibold">
                  Lap Test
                </div>
                <div className="text-sm text-gray-400 h-9  text-center mt-2">
                  Sample pickup at your home
                </div>
              </div>
            </div>
            <div className="ml-5 space-y-0.5 bg-transparent  md:h-72 md:w-60 rounded-2xl bg-white dark:bg-secondary-dark-bg w-full">
              <div className='h-52 w-60 rounded-t-2xl border-2 bg-white bg-[url("https://www.practostatic.com/consumer-home/desktop/images/1597423628/dweb_surgeries.png")] bg-cover'></div>
              <div className="h-24 w-60 rounded-b-xl border-2 bg-white">
                <div className="h-15 text-center ml-5 mr-5 tracking-tight text-xl font-semibold ">
                  Surguries
                </div>
                <div className="text-sm text-gray-400 h-9  text-center mt-2">
                  Safe and trusted surgury center
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" h-10 md:h-20 w-full bg-white dark:bg-secondary-dark-bg  "></div>

      <section className="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg w-full mt-5 mb-5 flex-wrap">
        <div className="h-32 w-full bg-white dark:bg-secondary-dark-bg  ">
          <div className="m-4   h-20 bg-white dark:bg-secondary-dark-bg">
            <div className=" h-13 text-black text-2xl font-semibold text-justify ml-6  tracking-tight  dark:text-white">
              Consult top doctors online for any health concern
            </div>
            <div className="h-9 text-black  text-sm ml-6  mb-5 text-justify mt-2  dark:text-white">
              Private online Consultation with verified doctors in all
              specialists
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg w-full mt-5 mb-5">
        <div className=" flex-wrap flex h-full w-full ml-16 space-y-8   md:flex space-x-6 md:ml-2 mr-2 md:h-96 md:w-full bg-white dark:bg-secondary-dark-bg ">
          <div className=" ml-6 sm:h-72 w-52 rounded-2xl  bg-white dark:bg-secondary-dark-bg ">
            <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png")] bg-cover'></div>
            <div className="h-15 text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">
              Periods Doubt and Pregency
            </div>
            <div className="h-13 text-sm text-sky-400   text-center mt-2 ">
              Consult Now
            </div>
          </div>
          <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
            <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png")] bg-cover'></div>
            <div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">
              Acne , pimple or skin issues
            </div>
            <div className="h-13 text-sm text-sky-400   text-center mt-2">
              Consult Now
            </div>
          </div>
          <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
            <div className='h-52 rounded-full bg-white bg-[url("https://www.practo.com/consult/static/images/top-speciality-sexology.svg")] bg-cover'></div>
            <div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">
              Performance issue in bed
            </div>
            <div className="h-13 text-sm text-sky-400   text-center mt-2">
              Consult Now
            </div>
          </div>
          <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
            <div className='h-52 rounded-full bg-white bg-[url("https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png")] bg-cover'></div>
            <div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">
              Cold , cough or <br /> fever
            </div>
            <div className="h-13 text-sm text-sky-400   text-center mt-2">
              Consult Now
            </div>
          </div>
          <div className=" h-72 w-52 rounded-2xl bg-white dark:bg-secondary-dark-bg ">
            <div className='h-52 rounded-full bg-white bg-[url("https://www.practo.com/consult/static/images/top-speciality-pediatric.svg")] bg-cover'></div>
            <div className="h-15    text-center ml-5 mr-5 mt-4 tracking-tight text-md font-semibold dark:text-white">
              Child not feeling <br />
              well
            </div>
            <div className="h-13 text-sm text-sky-400   text-center mt-2">
              Consult Now
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg w-full  mb-5 flex-nowrap mt-10">
        <div className=" m-4 mt h-10 bg-white dark:bg-secondary-dark-bg">
          <div className=" h-13 text-black text-2xl font-semibold text-justify ml-6 mt-5 tracking-tight  dark:text-white">
            Book an appointment for an in-clinic consultation
          </div>
          <div className="h-9 text-black  text-sm ml-6  mb-5 text-justify mt-2  dark:text-white ">
            Find experienced doctors across all specialists
          </div>
        </div>

        <div className="h-14 w-full bg-white dark:bg-secondary-dark-bg  "></div>

        <div className=" flex-wrap lg:h-96  bg-white dark:bg-secondary-dark-bg">
          <div className="container mx-auto  rounded-t-lg">
            <HorizontalImageCardList data={cardData} />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font  bg-white dark:bg-secondary-dark-bg ml-14 mr-14 mt-5 mb-5 rounded-3xl border-2 ">
        <div class="container mx-auto flex px-5 bottom-2 py-24 md:flex-row flex-col items-center ">
          <div class=" rounded-xl lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <img
              class="object-cover object-center rounded ml-5 "
              alt="hero"
              src="https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class=" h-13 text-black text-2xl font-semibold text-justify ml-6 mt-5 tracking-tight  dark:text-white">
              Read top articles from <br />
              health experts
              <br class="hidden lg:inline-block" />
            </h1>
            <p class=" leading-relaxed h-15 text-black  text-sm ml-6  mb-5 text-justify mt-2  dark:text-white">
              Health articles that keep you infromed about good health practices
              and achieve your goal
            </p>

            <div className=" ml-8 mt-12">
              <Button
                color="white"
                bgColor={currentColor}
                text="See all articles"
                borderRadius="10px"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-white dark:bg-secondary-dark-bg dark:text-white rounded-t-3xl ">
        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed text-lg">
              Edison bulb retro cloud bread echo park, helvetica stumptown
              taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
              ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
              adaptogen squid fanny pack vaporware. Man bun next level coloring
              book skateboard four loko knausgaard. Kitsch keffiyeh master
              cleanse direct trade indigo juice before they sold out gentrify
              plaid gastropub normcore XOXO 90's pickled cindigo jean shorts.
              Slow-carb next level shoindigoitch ethical authentic, yr scenester
              sriracha forage franzen organic drinking vinegar.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
              HOLDEN CAULFIELD
            </h2>
            <p class="text-gray-500 ">Senior Product Designer</p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font  bg-zinc-200 dark:bg-gray-600  ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4  text-gray-900 font-bold dark:text-white">
              Download the CareChainAI App
            </h1>
            <p class="mb-8 leading-relaxed dark:text-white">
              Access video consultation with India’s top doctors on the Practo
              app. Connect with doctors online, available 24/7, from the comfort
              of your home.
            </p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <div class="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <label for="hero-field" class="leading-7 text-sm text-gray-600">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-secondary-dark-bg text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out dark:text-white"
                ></input>
              </div>

              <Button
                className="inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover: rounded text-lg"
                color="white"
                bgColor={currentColor}
                text="Contact Us"
                borderRadius="10px"
              />
            </div>
            <p class="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div class="flex lg:flex-row md:flex-col">
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span class="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                </svg>
                <span class="ml-4 flex items-start flex-col leading-none">
                  <span class="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span class="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
            />
          </div>
        </div>
      </section>

      <section class="footer  h-screen " style={{ backgroundColor: currentColor }}>
        <div class="container mx-auto py-4 px-4">
          <div class="flex flex-wrap justify-between items-center">
            <div class="w-full sm:w-6/12">
              <h3 class="text-xl font-bold mb-2">Address</h3>
              <p class="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex
                placeat.
              </p>
              <div class="flex">
                <a href="#" class="mx-2 fab fa-facebook-f"></a>
                <a href="#" class="mx-2 fab fa-twitter"></a>
                <a href="#" class="mx-2 fab fa-linkedin"></a>
                <a href="#" class="mx-2 fab fa-instagram"></a>
              </div>
            </div>
            <div class="w-full sm:w-6/12">
              <h3 class="text-xl font-bold mb-2">E-mail</h3>
              <a href="#" class="link text-gray-700 mb-2">
                xyz@gmail.com
              </a>
              <a href="#" class="link text-gray-700 mb-2">
                xyz@gmail.com
              </a>
            </div>
            <div class="w-full sm:w-6/12">
              <h3 class="text-xl font-bold mb-2">Call us</h3>
              <p class="text-gray-700 mb-4">+91 925874569</p>
              <p class="text-gray-700 mb-4">+91 925874569</p>
            </div>
            <div class="w-full sm:w-6/12">
              <h3 class="text-xl font-bold mb-2">Opening hours</h3>
              <p class="text-gray-700 mb-4">
                monday - friday : 8:00 - 24:00 <br />
                saturday : 9:00 - 24:00
              </p>
            </div>
          </div>
        </div>
        <div class="credit text-center py-2 px-4">
          created by <span class="text-gray-700">CareChainAI</span> | all rights
          reserved!
        </div>
      </section>
    </div>
</section>
*/
