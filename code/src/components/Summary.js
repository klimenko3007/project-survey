import React from 'react'

import RestartButton from './RestartButton.js'

import './Summary.css'


const Summary = ({ name, needVacation, country, vacationType, date, email, checkboxGroup }) => {
  return (
    <section className="summary-container">
      <h3 className="question-heading" >Thank you for finishing the survey, <span className="answer">{name}!</span></h3>
      <p className="summary-text">Below are your answers</p>
      <ul className="answers-wrapper" aria-label="List of answers">
        {needVacation >= 5 && (<li className="answer-text">You really need vacation (<span className="answer">{needVacation} out of 10)</span>;</li>)}

        {needVacation < 5 && (<li className="answer-text">You can wait with vacation and take time planning;</li>)}

        <li className="answer-text">You would want to go to: <span className="answer">{country}</span>;</li>

        <li className="answer-text">You prefer the following type of your vacation activity: <span className="answer">{vacationType}</span>;</li>

        <li className="answer-text">You would want to start your vacation: <span className="answer">{new Date(date).toLocaleDateString("en", { year: "numeric", month: "long", day: "numeric" })}</span></li>

        {checkboxGroup.includes("agreeNewsletter") && (<li className="answer-text">You agreed to receive our newsletter</li>)}
        
      </ul>
      <p className="summary-text"> We will get back to you with options for your vacation at <span className="email">{email}</span> as soon as possible!</p>
    <RestartButton />
    
    </section>
  )
}
export default Summary