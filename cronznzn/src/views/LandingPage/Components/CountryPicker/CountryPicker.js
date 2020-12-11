import React, { useEffect, useState } from 'react'
import { NativeSelect } from '@material-ui/core'
import './CountryPicker.module.scss'
import GridContainer from '../../../../components/Grid/GridContainer'
import { fetchCountries } from '../../../../api/api'
import { APIErrorHandling } from '../../../../errors'

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get Countries
        const countriesResponse = await fetchCountries()
        const { countries } = countriesResponse.data
        setCountries(countries)
      } catch (e) {
        APIErrorHandling(e.statusCode, e.message)
      }
    }
    fetchData().catch((e) => {
      APIErrorHandling(e.statusCode, e.message)
    })
  }, [])

  return (
    <GridContainer justify="center" direction="row" alignItems="center">
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </GridContainer>
  )
}

export default CountryPicker
