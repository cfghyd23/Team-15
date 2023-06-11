import React from 'react'
import Avatar from '../assets/logo.jpg'
import UserDashboard from './UserDashboard';
import { Link, Navigate, Routes, useNavigate ,Route} from "react-router-dom";



export default function UserForm() {
 
    const navigate=useNavigate()


  return (
    <div class="container">
      <div class="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
    <img class="me-3" src={Avatar} alt="" width="48" height="38"/>
    <div class="lh-1">

      <h1 class="h6 mb-0 text-white lh-1">Weekly Psychometric Evaluation</h1>
    </div>
  </div>
  <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Recent Emotions</h6>

      <h1 class="h6 mb-0 text-white lh-1">Weekly UserForm</h1>
    </div>
  </div>
  <div class="my-3 p-3 bg-body rounded shadow-sm">
    <h6 class="border-bottom pb-2 mb-0">Recent updates</h6>

    <div class="d-flex text-body-secondary pt-3">
    <p class="pb-3 mb-0 small lh-sm border-bottom">
    On a scale of 1 to 10, how would you rate your overall mood and emotional well-being during the past week?      </p>
    </div>
    <input/>
    <div class="d-flex text-body-secondary pt-3">
    <p class="pb-3 mb-0 small lh-sm border-bottom">
    What was the most significant positive event or experience you had over the past week? Please describe it briefly.
    </p>
    </div>
    <textarea/>
    <div class="d-flex text-body-secondary pt-3">
    <p class="pb-3 mb-0 small lh-sm border-bottom">
    Did you encounter any challenging or stressful situations over the past week? If yes, please specify</p>
    </div>
    <textarea/>
    <div class="d-flex text-body-secondary pt-3">
    <p class="pb-3 mb-0 small lh-sm border-bottom">
    On a scale of 1 to 10, how would you rate your mental health during the past week?      </p>
    </div>
    <input/>
    <div class="d-flex text-body-secondary pt-3">
    <p class="pb-3 mb-0 small lh-sm border-bottom">
    Any help needed?</p>
    </div>
    <textarea/>    
  </div>
  <button type="button" class="btn btn-primary mx-3" onClick={()=>{
        navigate('/userDashboard');

    }}>Submit to Caretaker</button>


    </div>
  )
}
