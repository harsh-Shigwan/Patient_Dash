import React from 'react';
import { useNavigate,Route,Routes } from 'react-router-dom';
import './QnA.css';
const QnA = () => {
  const navigate = useNavigate();
  const navigateToContacts = () => {
 
    navigate('/QandA');
  }
  return (
    <div>
     
             
             <button type="button" class="rounded-none  hover:rounded-lg bg-blue-400 hover:bg-blue-600 Class text-3xl "  onClick={navigateToContacts}> Ask Your Questions</button>
             

  <div>
        <div className="testimonial" />
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="ut-enim-ad-minim-veniam-quis-n-parent">
            <div className="ut-enim-ad">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor
            </div>
            <div className="what-is-the">What is the consultation fees</div>
            <div className="group-child1" />
            <img className="group-icon" alt="" src="/group-36810.svg" />
          </div>
          <div className="rectangle-group">
            <div className="group-child2" />
            <div className="what-is-the-consultation-fees-parent">
              <div className="what-is-the1">What is the consultation fees</div>
              <img className="group-child3" alt="" src="/group-36813.svg" />
            </div>
          </div>
          <div className="rectangle-container">
            <div className="group-child2" />
            <div className="what-is-the-consultation-fees-parent">
              <div className="what-is-the1">What is the consultation fees</div>
              <img className="group-child3" alt="" src="/group-368131.svg" />
            </div>
         </div>
         </div>
         </div>

    

    </div>
  )
}
export default QnA;