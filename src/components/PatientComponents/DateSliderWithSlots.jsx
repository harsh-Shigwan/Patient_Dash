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
import TimeSlots from '../PatientComponents/TimeSlots';

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
const DateSliderWithSlots = () => {
    const [selectedDates, setSelectedDates] = useState([new Date()]);
  
    const handleChange = (selectedDates) => {
      setSelectedDates(selectedDates);
    };
  
    return (
      <div>
        <DatePicker
          selectedDates={selectedDates}
          onChange={handleChange}
        />
        {selectedDates.length > 0 && (
          <div>
            <h2>Appointment time slots for {selectedDates[0].toLocaleDateString()}</h2>
            <TimeSlots />
          </div>
        )}
      </div>
    );
  };
  
  export default DateSliderWithSlots;