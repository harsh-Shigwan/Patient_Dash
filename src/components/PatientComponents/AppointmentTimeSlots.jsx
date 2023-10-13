import React from 'react';

function AppointmentTimeSlots({ date }) {
  // You can fetch appointment time slots for the selected date from your data source
  // For this example, we'll use a static array of time slots
  const timeSlots = [
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
  ];

  return (
    <div>
      <h3>Appointment Time Slots for {date.toDateString()}</h3>
      <ul>
        {timeSlots.map((slot, index) => (
          <li key={index}>{slot}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentTimeSlots;
