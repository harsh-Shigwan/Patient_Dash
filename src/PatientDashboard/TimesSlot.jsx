import { useState } from "react";
import Calendar from "react-calendar";
//import './App.css';
import Time from "../components/PatientComponents/Time";
import { CardData } from "../data/PatientData/dummy";
function TimesSlot() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div>
      <div className=" h-screen flex bg-teal-400 ">
        <div className=" h-full bg-lime-200 w-3/5  "></div>
        
          <div className="h-full bg-red-500 w-2/5  "><div className="ml-3 mr-3">
          <h1 className="header">Book Appointment</h1>
          <div>
            <Calendar
              onChange={setDate}
              value={date}
              onClickDay={() => setShowTime(true)}
            />
          </div>
  
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
          <div className=" rounded-sm bg-gray-100  w-2/5 flex ">
            <Time showTime={showTime} date={date} />
          </div>
        </div></div>
         
          
        
      </div>
      <div className="app">
        <h1 className="header">React Calendar</h1>
        <div>
          <Calendar
            onChange={setDate}
            value={date}
            onClickDay={() => setShowTime(true)}
          />
        </div>

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
        <div className=" rounded-sm bg-gray-100  w-2/5 flex pl-12 ">
          <Time showTime={showTime} date={date} />
        </div>
      </div>
    </div>
  );
}

export default TimesSlot;
