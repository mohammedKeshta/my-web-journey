import axios from "axios"

// Use the free API https://restcountries.eu
const BASE_URL = "https://restcountries.eu/rest/v2"

async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(`${BASE_URL}/regionalbloc/${regionalbloc}`)
  const { data: countries } = getApi
  return countries.map((country: { name: string }) => country.name)
}

async function getCountry(country: string) {
  const getApi = await axios(`${BASE_URL}/name/${country}`)
  const { data: countryDetails } = getApi
  const { capital, region, numericCode } = countryDetails[0]
  return {
    capital,
    region,
    numericCode,
  }
}

async function getRegionCapitals(regionalbloc: string) {
  const countries = await getRegionCountries(regionalbloc)
  const promises = countries.map((endpoint: any) => axios(`${BASE_URL}/name/${endpoint}`))
  const promisesArr = await Promise.all(promises)
  // @ts-ignore
  return promisesArr.map((promise) => promise.data[0].capital)
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals,
}
