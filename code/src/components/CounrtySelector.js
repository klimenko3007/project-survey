import React from 'react'

import StartNextButton from './StartNextButton'

import './CountrySelector.css'

const CountrySelector = ({ setQuestion, country, setCountry, countries, progress, setProgress }) => {

  const onCountryChange = (event) => {
    setCountry(event.target.value)
  }
  return (
    <section className="selector-card">
      <h3 className="question-heading">Where would you like to go?</h3>
      <label htmlFor="country" className="selector-label">
        Choose a country
      </label>
      <select
        className="selector"
        id="coutry"
        value={country}
        onChange={onCountryChange}
        required
      >
        {countries.map((countryName, index) => {
          if (index === 0) {
            return <option key={countryName} value="" disabled={true}>{countryName}</option>
          }
          else {
            return <option key={countryName} value={countryName}>{countryName}</option>
          }
        })}
      </select>
      <StartNextButton
        setQuestion={setQuestion}
        progress={progress}
        setProgress={setProgress}
        state={country}
      />
    </section>
  )
}

export default CountrySelector