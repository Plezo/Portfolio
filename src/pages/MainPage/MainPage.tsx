import React from 'react';

import Calendar from '../../components/Calendar/Calendar'
import Appointment from '../../components/Appointment/Appointment'

import './MainPage.css'

function MainPage() {
  return (
    <div className='calendar'>
      <Calendar />
    </div>
  );
}

export default MainPage;