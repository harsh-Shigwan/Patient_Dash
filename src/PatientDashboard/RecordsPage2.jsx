import React, { useState } from "react";
import Calendar from "react-calendar";
import { IoIosAdd } from "react-icons/io";
import "react-calendar/dist/Calendar.css";

const RecordsPage2 = () => {
  // States for form fields
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState("report");
  const [image, setImage] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility
  const [uploadedImages, setUploadedImages] = useState([]); // State to store uploaded images

  // State for confirming image removal
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [removingIndex, setRemovingIndex] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new image object with title, date, and type
    const newImage = {
      title,
      date: date.toLocaleDateString(),
      type,
      image,
    };

    // Add the new image to the list of uploaded images
    setUploadedImages([...uploadedImages, newImage]);

    // Clear form fields
    setTitle("");
    setType("report");
    setImage(null);

    // Log the form data (replace this with your API call)
    console.log(newImage);
  };

  // Function to remove an uploaded image
  const removeImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
  };

  // Function to toggle calendar visibility
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  // Function to start image removal confirmation
  const startRemoveConfirmation = (index) => {
    setConfirmRemove(true);
    setRemovingIndex(index);
  };

  // Function to cancel image removal confirmation
  const cancelRemoveConfirmation = () => {
    setConfirmRemove(false);
    setRemovingIndex(null);
  };

  // Function to confirm and remove the image
  const confirmRemoveImage = () => {
    if (removingIndex !== null) {
      removeImage(removingIndex);
      cancelRemoveConfirmation(); // Close the confirmation dialog
    }
  };

  return (
    <div className="bg-white dark:bg-secondary-dark-bg container mx-auto p-4 animate-form-in">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="image" className="dark:text-white block font-semibold">
            Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="dark:text-white w-full py-2 px-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="dark:text-white block font-semibold">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-2 px-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="dark:text-white block font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="date" className="dark:text-white block font-semibold">
            Date
          </label>
          <div className="relative ">
            <input
              type="text"
              readOnly
              value={date.toLocaleDateString()} // Display the date in your preferred format
              className="w-full py-2 px-3 border rounded focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
              onClick={toggleCalendar} // Show calendar when the input is clicked
            />
            {showCalendar && ( // Conditionally render the calendar based on showCalendar state
              <Calendar
                value={date}
                onChange={(date) => {
                  setDate(date);
                  toggleCalendar(); // Hide the calendar once a date is selected
                }}
                className="absolute top-12 left-0 bg-white rounded p-2 border border-gray-300 z-10"
              />
            )}
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="dark:text-white block font-semibold">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full py-2 px-3 border rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="report">
              <IoIosAdd name="report" /> Report
            </option>
            <option value="prescription">
              <IoIosAdd name="prescription" /> Prescription
            </option>
            <option value="invoice">
              <IoIosAdd name="invoice" /> Invoice
            </option>
          </select>
        </div>
        <div className="col-span-2 pl-3 mt-4 space-x-2">
          <button
            type="button"
            className="w-full md:w-auto px-5 pl-3 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 text-xl text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full md:w-auto px-5 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 text-xl text-white"
          >
            Upload
          </button>
        </div>
      </form>

      {/* Display uploaded images */}
      {uploadedImages.length > 0 && (
        <div className="mt-8">
          <h2 className="dark:text-white text-2xl font-semibold mb-4">Uploaded Images</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedImages.map((img, index) => (
              <div key={index} className="border border-gray-200 p-2 rounded">
                <img src={URL.createObjectURL(img.image)} alt={img.title} className="w-full h-40 object-cover" />
                <p className="dark:text-white text-sm mt-2">Title: {img.title}</p>
                <p className="dark:text-white text-sm">Date: {img.date}</p>
                <p className="dark:text-white text-sm">Type: {img.type}</p>
                <button
                  onClick={() => startRemoveConfirmation(index)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Confirmation dialog */}
      {confirmRemove && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg">
            <p className="mb-4 dark:text-white text-lg">Are you sure you want to remove this image?</p>
            <div className="flex justify-end">
              <button
                onClick={cancelRemoveConfirmation}
                className="mr-2 px-3 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={confirmRemoveImage}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecordsPage2;