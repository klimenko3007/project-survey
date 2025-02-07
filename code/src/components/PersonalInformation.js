import React from 'react'

import './PersonalInformation.css'

const PersonalInformation = ({ name, setName, email, setEmail }) => {
  const onNameChange = event => {
    setName(event.target.value)
  }

  const onEmailChange = event => {
    setEmail(event.target.value)
  }
  return (
    <section className="text-input-card">
      <h3 className="question-heading">Please let us know the following information about you</h3>
      <label htmlFor="name" className="text-input-label">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        className="text-input"
        onChange={onNameChange}
      />

      <label htmlFor="email" className="text-input-label">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={onEmailChange}
        required
        className="text-input"
      />
    </section>

  )
}
export default PersonalInformation