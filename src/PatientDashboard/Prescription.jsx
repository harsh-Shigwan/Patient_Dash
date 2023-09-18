import React, { useState, useEffect } from "react";

const DateSlider = ({ slots }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Set the selected date to today's date.
    setSelectedDate(new Date());
  }, []);

  const renderSlots = () => {
    const today = new Date();
    const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

    return (
      <div>
        {slots.map((slot) => (
          <div
            key={slot.id}
            className={
              slot.date === selectedDate ? "selected" : slot.date >= today && slot.date <= tomorrow ? "available" : ""
            }
            onClick={() => setSelectedDate(slot.date)}
          >
            {slot.date.toLocaleDateString()}
          </div>
        ))}
        <div className="today">Today</div>
        <div className="tomorrow">Tomorrow</div>
        <div className="yesterday">Yesterday</div>
      </div>
    );
  };

  return (
    <div>
      <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
      {renderSlots()}
    </div>
  );
};

export default DateSlider;
