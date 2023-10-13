import React, { useState } from "react";
import "./App.css";

const getAbbreviatedMonthName = (month) => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return monthNames[month];
};

const getAbbreviatedDayName = (day) => {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return dayNames[day];
};

const LayerWhite = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const abbreviatedMonth = getAbbreviatedMonthName(selectedDate.getMonth());
  const abbreviatedDay = getAbbreviatedDayName(selectedDate.getDay());

  return (
    <div className="layer-white">
      <div className="frame-parent">
        <div className="image-20-parent">
          <img className="image-20-icon" alt="" src="/image-20@2x.png" />
          <div className="dr-raghav-gupta">Dr. Raghav Gupta</div>
          <div className="mbbs">M.B.B.S</div>
          <div className="years-of-experience">
            18+ years of experience overall
          </div>
          <div className="santacruz-mumbai">Santacruz, Mumbai</div>
          <div className="consultation-fees-500-wrapper">
            <div className="consultation-fees-500-">
              Consultation Fees 500/-
            </div>
          </div>
          <div className="millennium-smile-dental">
            Millennium Smile Dental Clinic
          </div>
        </div>
        <div className="group-parent">
          <div className="parent" onClick={() => handleDateChange(-1)}>
            <div className="div">{selectedDate.getDate()}</div>
            <div className="sat">{abbreviatedDay}</div>
            <div className="oct">{abbreviatedMonth}</div>
          </div>
          <div className="group" onClick={() => handleDateChange(1)}>
            <div className="div1">{selectedDate.getDate() + 1}</div>
            <div className="sun">{getAbbreviatedDayName((selectedDate.getDay() + 1) % 7)}</div>
            <div className="oct">{getAbbreviatedMonthName(selectedDate.getMonth())}</div>
          </div>
          <div className="container" onClick={() => handleDateChange(2)}>
            <div className="div2">{selectedDate.getDate() + 2}</div>
            <div className="mon">{getAbbreviatedDayName((selectedDate.getDay() + 2) % 7)}</div>
            <div className="oct">{getAbbreviatedMonthName(selectedDate.getMonth())}</div>
          </div>
          <img className="chevron-down-icon" alt="" src="/chevrondown.svg" />
          <img className="frame-child" alt="" src="/line-12.svg" />
        </div>
        <div className="am-wrapper">
          <div className="am">10:30 AM</div>
        </div>
        <div className="pm-wrapper">
          <div className="am">12:30 PM</div>
        </div>
        <div className="pm-container">
          <div className="am">7:30 PM</div>
        </div>
        <div className="pm-frame">
          <div className="am">7:30 PM</div>
        </div>
        <div className="frame-div">
          <div className="am">7:30 PM</div>
        </div>
        <div className="morning-slots">Morning Slots</div>
        <div className="afternoon-slots">Afternoon Slots</div>
        <div className="evening-slots">Evening Slots</div>
        <div className="am-container">
          <div className="am">11:00 AM</div>
        </div>
        <div className="pm-wrapper1">
          <div className="am">1:00 PM</div>
        </div>
      </div>
    </div>
  );
};

export default LayerWhite;