import React, { useState, useEffect } from 'react';

function QandA() {
  const [profile, setProfile] = useState('');
  const [basicDetails, setBasicDetails] = useState({
    gender: '',
    age: '',
    email: '',
    profession: '',
    weight: '',
    height: '',
    medication: false,
    diagnosedCondition: false,
    allergies: false,
  });
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [bmi, setBMI] = useState(null);

  const handleProfileChange = (selectedProfile) => {
    setProfile(selectedProfile);
  };

  const handleBasicDetailsChange = (field, value) => {
    setBasicDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const calculateBMI = () => {
    if (basicDetails.weight && basicDetails.height) {
      const weightInKg = parseFloat(basicDetails.weight);
      const heightInMeters = parseFloat(basicDetails.height) / 100; // Assuming height is in centimeters
      const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiValue);
    } else {
      setBMI(null);
    }
  };

  useEffect(() => {
    calculateBMI();
  }, [basicDetails.weight, basicDetails.height]);

  const handleSubmit = () => {
    // Handle form submission here
    console.log({
      profile,
      basicDetails,
      title,
      description,
      bmi,
    });
  };

  return (
    <div className="bg-white dark:bg-secondary-dark-bg container mx-auto p-4 border rounded-lg shadow-lg ">
      <h1 className="dark:text-white text-2xl font-semibold mb-4">Ask a Free Question</h1>
      <ProfileSelector profile={profile} onChange={handleProfileChange} />
      {profile === 'Myself' && (
        <>
          <DetailsSection
            basicDetails={basicDetails}
            onChange={handleBasicDetailsChange}
          />
          <AdditionalDetails
            basicDetails={basicDetails}
            onChange={handleBasicDetailsChange}
            bmi={bmi}
          />
        </>
      )}
      {profile === 'SomeoneElse' && (
        <>
          <DetailsSection
            basicDetails={basicDetails}
            onChange={handleBasicDetailsChange}
          />
          <AdditionalDetails
            basicDetails={basicDetails}
            onChange={handleBasicDetailsChange}
            bmi={bmi}
          />
        </>
      )}
      <TitleSection title={title} onChange={setTitle} />
      <DescriptionSection description={description} onChange={setDescription} />
      {bmi !== null && (
        <div className="mt-4">
          <BMISection bmi={bmi} />
        </div>
      )}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue mt-4" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

function ProfileSelector({ profile, onChange }) {
  return (
    <div className="mb-4">
      <h2 className=" dark:text-white text-lg font-semibold mb-2">Select Profile</h2>
      <select
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        value={profile}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Profile</option>
        <option value="Myself">Myself</option>
        <option value="SomeoneElse">Someone Else</option>
      </select>
    </div>
  );
}

function DetailsSection({ basicDetails, onChange }) {
  return (
    <div className=" mb-4">
      <h2 className=" dark:text-white text-lg font-semibold mb-2">Basic Details</h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className=" dark:text-white block mb-1">Gender:</label>
          <select
            className=" w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            value={basicDetails.gender}
            onChange={(e) => onChange('gender', e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className=" dark:text-white block mb-1">Age:</label>
          <input
            type="number"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            value={basicDetails.age}
            onChange={(e) => onChange('age', e.target.value)}
          />
        </div>
      </div>
      <div className="mt-3 mb-2">
        <label className=" dark:text-white block mb-1">Email:</label>
        <input
          type="email"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={basicDetails.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
      </div>
     </div>
  );
}

function AdditionalDetails({ basicDetails, onChange, bmi }) { // Receive bmi prop
  return (
    <div className="mb-4">
      <h2 className="dark:text-white text-lg font-semibold mb-2">Additional Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="dark:text-white block mb-1">Profession:</label>
          <select
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            value={basicDetails.profession}
            onChange={(e) => onChange('profession', e.target.value)}
          >
            <option value="">Select Profession</option>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Teacher">Teacher</option>
            {/* Add more professions */}
          </select>
        </div>
        <div>
          <label className="dark:text-white block mb-1">Weight:</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            value={basicDetails.weight}
            onChange={(e) => onChange('weight', e.target.value)}
          />
        </div>
        <div>
          <label className="dark:text-white block mb-1">Height:</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            value={basicDetails.height}
            onChange={(e) => onChange('height', e.target.value)}
          />
        </div>
        <div>
          <label className="dark:text-white block mb-1">BMI:</label>
          <p className="dark:text-white w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">{bmi !== null ? bmi : '-'}</p>
        </div>
      </div>
      <div className="mb-2">
        <label className="dark:text-white block mb-1">Are you under any medication?</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="true"
              checked={basicDetails.medication === true}
              onChange={(e) => onChange('medication', e.target.value === 'true')}
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="false"
              checked={basicDetails.medication === false}
              onChange={(e) => onChange('medication', e.target.value === 'true')}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
      <div className="mb-2">
        <label className="dark:text-white block mb-1">Do you have any previously diagnosed condition?</label>
        <div className="flex items-center">
          <label className="mr-4">
            <input
              type="radio"
              value="true"
              checked={basicDetails.diagnosedCondition === true}
              onChange={(e) =>
                onChange('diagnosedCondition', e.target.value === 'true')
              }
              className="mr-2"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              value="false"
              checked={basicDetails.diagnosedCondition === false}
              onChange={(e) =>
                onChange('diagnosedCondition', e.target.value === 'true')
              }
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>
    </div>
  );
}

function TitleSection({ title, onChange }) {
  return (
    <div className=" mb-4">
      <h2 className=" dark:text-white text-lg font-semibold mb-2">Title (Max 40 characters)</h2>
      <input
        type="text"
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        value={title}
        onChange={(e) => onChange(e.target.value)}
        maxLength={40}
      />
    </div>
  );
}

function DescriptionSection({ description, onChange }) {
  return (
    <div className="mb-4">
      <h2 className="dark:text-white text-lg font-semibold mb-2">Description (Max 100 characters)</h2>
      <textarea
        className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        value={description}
        onChange={(e) => onChange(e.target.value)}
        maxLength={100}
        rows="4"
      />
    </div>
  );
}

function BMISection({ bmi }) {
  return (
    <div className="mb-4">
      <h2 className="dark:text-white text-lg font-semibold mb-2">BMI Calculation</h2>
      <p className="dark:text-white">Your BMI: {bmi}</p>
    </div>
  );
}

export default QandA;


