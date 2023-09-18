"use client";
import React, { useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { CardData } from "../data/PatientData/dummy";
import { dropdownData, dropdown1Data } from "../data/PatientData/dummy";
import { useStateContext } from "../contexts/PatientContext/ContextProvider";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
//import profile from "./profile";
//import { useNavigate, useHistory } from "react-router-dom";
import Calendar from "react-calendar";

import Time from "../components/PatientComponents/Time";



 
const DropDown1 = ({ currentMode }) => (
  <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
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

const Appointment = () => {
  const DropDown = ({ currentMode, selectedCity, filterCardsByCity  }) => (
    <div className=" border-4 border-color px-2 py-1 rounded-md w-full">
      <DropDownListComponent
        id="City"
        fields={{ text: "City", value: "Id" }}
        style={{ border: "none", color: currentMode === "Dark" && "white" }}
        dataSource={dropdownData}
        popupHeight="220px"
        popupWidth="25vw"
        placeholder="select the City"
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
      const filteredData = CardData.filter((card) => card.City === dropdownData.find((item) => item.Id === CityId).City);
      setItems(filteredData);
    }
    
  };

  const { currentColor, currentMode } = useStateContext();
  const [items, setItems] = useState(CardData);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

  //const navigate = useNavigate();

  // const handleButtonClick = () => {
  //   // Use navigate to go to another page
  //   navigate('/TimesSlot');
  // };

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
    <div>
      <div className=" h-full w-full">
        <div className="">
          <section className=" pl-0 sm:  h-screen w-full   ">
            <header className="bg-white dark:bg-secondary-dark-bg h-28  flex  sticky">
              <div
                className=" mt-7 w-screen space-x-4 bg-white dark:bg-secondary-dark-bg md:bg-white flex relative ml-10 mr-80  h-10 md:w-full 
             md:space-x-4 "
              >
                <div className=" h-12  w-60  md:h-10  md:w-3/4 bg-white dark:bg-secondary-dark-bg ">
                  <DropDown currentMode={currentMode} selectedCity={selectedCity}
                  filterCardsByCity={filterCardsByCity} ></DropDown>
                </div> <div className="doctor-list">
                {setItems.map((card) => (
                  <DoctorCard key={card.Id} card={card} />
                ))}
              </div>
                <div className="w-8/12 md:h-10 md:w-full bg-white dark:bg-secondary-dark-bg  ">
                  <DropDown1 currentMode={currentMode}></DropDown1>
                </div>{" "}
              </div>
            </header>
            <div>
              {details.map((x) => {
                return (
                  
                  <div className="flex">
                  <div className="h-3/4 ml-5 mr-5 mt-1  w-full  bg-red-500 dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                        <div className=" flex">
                          <div className="mt-0 flex">
                            <motion.div
                              style={{ x, y, rotateX, rotateY, z: 5 }}
                              className='h-56 w-52 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                              draggable="false"
                            ></motion.div>
                          </div>
                          <div className=" mt-0  ml-10 flex-1">
                      <div
                        className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black 
                    text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white "
                      >
                        {x.Name}
                      </div>
                      <div
                        className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  
                     tracking-tight text-md font-semibold dark:text-white"
                      >
                        {x.Edu}
                      </div>
                      <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                        {x.Exp}
                        <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                      </div>
                      <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                        {x.City}
                      </div> <div className="  bg-teal-300 mt-24  h-36">{x.Det}
                      </div>
                     
                     
                    </div>
                   <div className="h-full bg-indigo-800">
                    <div className="ml-3 mr-3 h-full bg-sky-900">
                      <h1 className="header">Book Appointment</h1>
                      <div className=" h-2/4  bg-lime-600">
                        <Calendar
                          onChange={setDate}
                          value={date}
                          onClickDay={() => setShowTime(true)}
                        />
                      </div></div>
                        <div>
                      {date.length > 0 ? (
                        <p>
                          <span>Start:</span>
                          {date[0].toDateString()}
                          &nbsp; &nbsp;
                          <span>End:</span>
                          {date[1].toDateString()}
                        </p>
                      ) : (
                        <p>
                          <span>selected date for Appointment:</span>
                          {date.toDateString()}
                        </p>
                      )}
                      <div className=" rounded-sm bg-gray-100  w-full flex ">
                        <Time showTime={showTime} date={date} /></div>
                      </div>
                    </div>
                  </div></div></div>
                );
              })}
            </div>

            {items.map((card, index) => {
              return (
                <div
                  className="grid grid-cols-2   h-2/5 w-full  bg-white dark:bg-secondary-dark-bg "
                  onClick={() =>{ detailpage(card);scrollWin()}}
                >
                  <div style={{ perspective: 4000 }}>
                    <motion.div
                      style={{ x, y, rotateX, rotateY, z: 5 }}
                      drag
                      dragElastic={0.1}
                      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      whileTap={{ cursor: "grabbing" }}
                      className="h-full w-full bg-white dark:bg-secondary-dark-bg   rounded-xl "
                    >
                      <div className="h-3/4 ml-5 mr-5 mt-1   bg-white dark:bg-secondary-dark-bg relative  rounded-lg border-2  ">
                        <div className=" flex">
                          <div className="mt-0 flex">
                            <motion.div
                              style={{ x, y, rotateX, rotateY, z: 5 }}
                              className='h-5/6 w-1/4 ml-5 mt-3  absolute   bg-white dark:bg-secondary-dark-bg bg-[url("https://images.apollo247.in/doctors/noimagemale.png")] bg-cover rounded-full  '
                              draggable="false"
                            ></motion.div>
                          </div>
                          <div className=" mt-0 flex-1">
                            <div
                              className=" ml-48 h-12   bg-white dark:bg-secondary-dark-bg h-13 text-black 
                           text-2xl font-semibold text-justify mt-5 tracking-tight  dark:text-white "
                            >
                              {card.Name}
                            </div>
                            <div
                              className=" ml-48 h-10  bg-white dark:bg-secondary-dark-bg h-15   mr-5  
                             tracking-tight text-md font-semibold dark:text-white"
                            >
                              {card.Edu}
                            </div>
                            <div className=" h-8 ml-48  bg-white dark:bg-secondary-dark-bg">
                              {card.Exp}
                              <div className="h-8  mb-4 ml-80  bg-white dark:bg-secondary-dark-bg absolute"></div>
                            </div>
                            <div className="h-8 ml-48 mr-10  bg-white dark:bg-secondary-dark-bg">
                              {card.City}
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="flex ">
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className=" ml-5 mr-1 mb-3 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  
                     text-center mt-1   tracking-tight text-md font-semibold dark:text-white  rounded border-2"
                        >
                          Book Video Consult
                        </motion.div>
                        <motion.div
                          style={{ x, y, rotateX, rotateY, z: 5 }}
                          className="mr-5 ml-1 h-12 w-2/4  bg-white dark:bg-secondary-dark-bg h-15  text-center mt-1 tracking-tight text-md  rounded border-2  font-semibold dark:text-white"
                        >
                          Book Hospital Visit
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
  
};

export default Appointment;