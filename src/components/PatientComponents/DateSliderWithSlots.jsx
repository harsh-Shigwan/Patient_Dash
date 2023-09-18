// import React, { useState } from "react";
// import DatePicker from "react-datepicker";

// import React, { useState } from "react";
// import { DateRangeSlider } from "react-date-range-slider";

// const  DateSliderWithSlots = ({ slots }) => {
//   const [selectedDates, setSelectedDates] = useState([new Date()]);

//   const handleDateChange = (dates) => {
//     setSelectedDates(dates);
//   };


//   return (
//     <DateRangeSlider
//     dates={selectedDates}
//     onChange={handleDateChange}
//     minDate={new Date()}
//     maxDate={new Date()}
//     step={1}
//     showTodayButton={true}
//     showYesterdayButton={true}
//     slots={slots}
//   />
//   );
// };

// export default DateSliderWithSlots;
// import React, { useState, useEffect } from "react";

// const DateSliderWithSlots =  ({ slots }) => {
//     const [selectedDate, setSelectedDate] = useState(new Date());
  
//     useEffect(() => {
//       // Set the selected date to today's date.
//       setSelectedDate(new Date());
//     }, []);
  
//     const renderSlots = () => {
//       const today = new Date();
//       const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
//       const slotsByDate = slots.reduce((acc, slot) => {
//         const date = slot.date;
//         if (!acc[date]) {
//           acc[date] = [];
//         }
//         acc[date].push(slot);
//         return acc;
//       }, {});
  
//       return (
//         <div>
//           {Object.keys(slotsByDate).map((date) => (
//             <div key={date}>
//               <div className="date">
//                 {date}
//               </div>
//               <ul>
//                 {slotsByDate[date].map((slot) => (
//                   <li
//                     key={slot.id}
//                     className={
//                       slot.date === selectedDate ? "selected" : slot.date >= today && slot.date <= tomorrow ? "available" : ""
//                     }
//                     onClick={() => setSelectedDate(slot.date)}
//                   >
//                     {slot.date.toLocaleDateString()}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       );
//     };
  
//     return (
//       <div>
//         <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//         {renderSlots()}
//       </div>
//     );
//   };

// export default DateSliderWithSlots;

// DateRangeSlider.js
import React, { useState } from 'react';
import TimeSlots from '../PatientComponents/TimeSlots';

function DateSliderWithSlots() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Replace this with your logic to get today and tomorrow's date
  const today = new Date().toLocaleDateString();
  const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold">Date Range Slider</h1>
      <div className="flex space-x-4 mt-4">
        <div>
          <p className="text-lg font-semibold">Today</p>
          <div
            className={`cursor-pointer p-2 rounded-full border ${
              selectedDate === today ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleDateClick(today)}
          >
            {today}
          </div>
        </div>
        <div>
          <p className="text-lg font-semibold">Tomorrow</p>
          <div
            className={`cursor-pointer p-2 rounded-full border ${
              selectedDate === tomorrow ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleDateClick(tomorrow)}
          >
            {tomorrow}
          </div>
        </div>
      </div>
      {selectedDate && <TimeSlots date={selectedDate} />}
    </div>
  );
}

export default DateSliderWithSlots;
