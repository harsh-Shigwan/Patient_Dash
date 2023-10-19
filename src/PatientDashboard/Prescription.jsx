

import React, { Component } from "react"
import "./Prescription.css";

const Prescription = () => {
  return (
 
    <div >
              <div className="background-upper-child" />
              <div className="parent">
                <div className="div">16/10/23</div>
                <div className="dr-ashish-wrapper">
                  <div className="dr-ashish">Dr. Ashish</div>
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
                  <div className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="div">16/10/23</div>
                <div className="dr-ashish-wrapper">
                  <div className="dr-ashish">Dr. Ashish</div>
                </div>
                <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
                  <div className="lorem-ipsum-dolor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.
                  </div>
                </div>
           </div>
             </div>
        
     
   
  );
};

export default  Prescription;






















/*import React, { useState, useEffect } from 'react';

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPrescription, setSelectedPrescription] = useState('');
  const [patientName, setPatientName] = useState('');

  // Function to add a prescription to the list
  const addPrescription = () => {
    if (selectedPrescription && patientName) {
      setPrescriptions([...prescriptions, { patientName, prescription: selectedPrescription }]);
      setSelectedPrescription('');
      setPatientName('');
    }
  };

  // Function to filter prescriptions as you type
  const filteredPrescriptions = prescriptions.filter((prescription) =>
    prescription.prescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Use useEffect to clear the search query when a prescription is selected
  useEffect(() => {
    if (selectedPrescription) {
      setSearchQuery('');
    }
  }, [selectedPrescription]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Patient Prescription</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search for a prescription..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <div className="mt-2">
          {filteredPrescriptions.map((prescription, index) => (
            <div
              key={index}
              onClick={() => setSelectedPrescription(prescription.prescription)}
              className="cursor-pointer text-blue-500 hover:underline"
            >
              {prescription.prescription}
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={addPrescription}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
        >
          Submit Prescription
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Prescription List</h2>
        <ul className="list-disc ml-6">
          {prescriptions.map((prescription, index) => (
            <li key={index}>
              Patient: {prescription.patientName} - Prescription: {prescription.prescription}
            </li>
          ))}
        </ul>
      </div>
      </div>
    )
  };
export default Prescription;*/