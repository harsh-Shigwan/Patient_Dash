import RecordsPage2 from "../PatientDashboard/RecordsPage2"
import { useNavigate,Route,Routes } from 'react-router-dom';
import React, { useState } from "react";
import './Records.css'

 
const Records = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/RecordsPage2');
  }
  return (
    <div>
    <div> 
    <div className="background-upper-child" />
    <div className="head-ache-report-parent">
      <div className="head-ache-report">Head ache report</div>
      <div className="div">16/10/23</div>
      <div className="dr-ashish-wrapper">
        <div className="dr-ashish">Dr. Ashish</div>
      </div>
    </div>
    <div className="head-ache-report-group">
      <div className="head-ache-report">Head ache report</div>
      <div className="div">16/10/23</div>
      <div className="dr-ashish-wrapper">
        <div className="dr-ashish">Dr. Ashish</div>
      </div>
    </div>
    
 
   
 
   </div>
      
             
             <button type="button" class="rounded-none  hover:rounded-lg bg-blue-400 hover:bg-blue-600 Class text-3xl "  onClick={navigateToContacts}> Upload</button>
            
     

    </div>
  )
}

  
export default Records;