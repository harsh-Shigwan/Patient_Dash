import {useState} from 'react';
import Calendar from 'react-calendar';

import Times from '../PatientComponents/Times'

import React from 'react'

function Time(props) {
 
 return (
 <div className=' bg-green-500 dark:bg-secondary-dark-bg flex'>
  {props.showTime ? <Times date={props.date}/> : null}
 </div>
  )
}

export default Time;