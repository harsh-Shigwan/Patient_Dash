import React, { useState, useEffect } from 'react';

function Remind() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');
  const [time, setTime] = useState('');
  const [sound, setSound] = useState(null);

  // Function to add a new reminder
  const addReminder = () => {
    if (newReminder && time) {
      const newReminderItem = {
        text: newReminder,
        time: time,
      };

      setReminders([...reminders, newReminderItem]);

      // Clear input fields
      setNewReminder('');
      setTime('');

      // Play the added sound
      playAddedSound();
    }
  };

  // Function to play the added sound
  const playAddedSound = () => {
    if (sound) {
      const audio = new Audio(sound);
      audio.play();
    }
  };

  // Function to remove a reminder
  const removeReminder = (index) => {
    const updatedReminders = [...reminders];
    updatedReminders.splice(index, 1);
    setReminders(updatedReminders);
  };

  // Check for due reminders when the component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      reminders.forEach((reminder, index) => {
        const reminderTime = new Date(reminder.time);
        if (now >= reminderTime) {
          // Remove the due reminder
          removeReminder(index);

          // Play a sound when a reminder is due
          playSound();
        }
      });
    }, 1000); // Check every second
    return () => clearInterval(interval);
  }, [reminders]);

  // Function to play a sound when a reminder is due
  const playSound = () => {
    if (sound) {
      const audio = new Audio(sound);
      audio.play();
    }
  };

  return (
    <div className="bg-white dark:bg-secondary-dark-bg container mx-auto p-4">
      <h1 className=" dark:text-white text-2xl font-semibold mb-4">Reminder</h1>

      {/* Reminder Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter a reminder"
          value={newReminder}
          onChange={(e) => setNewReminder(e.target.value)}
          className="w-64 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="ml-4 w-64 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Reminder List */}
      <div className="mb-4">
        <h2 className=" dark:text-white text-lg font-semibold mb-2">Reminder List</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index} className=" dark:text-white mb-2">
              <strong>{reminder.text}</strong> - {reminder.time}
              <button
                onClick={() => removeReminder(index)}
                className="bg-red-500 text-white font-semibold py-1 px-2 rounded-full focus:outline-none focus:shadow-outline-red ml-2"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Sound Selection */}
      <div className="mb-4">
        <h2 className="dark:text-white text-lg font-semibold mb-2">Select Sound</h2>
        <select
          value={sound}
          onChange={(e) => setSound(e.target.value)}
          className="w-64 p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value={null}>No Sound</option>
          <option value="sound1.mp3">Sound 1</option>
          <option value="sound2.mp3">Sound 2</option>
          {/* Add more sound options */}
        </select>
      </div>

      {/* Add Reminder Button (Moved to the bottom) */}
      <button
        onClick={addReminder}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue ml-2"
      >
        Add Reminder
      </button>
    </div>
  );
}

export default Remind;