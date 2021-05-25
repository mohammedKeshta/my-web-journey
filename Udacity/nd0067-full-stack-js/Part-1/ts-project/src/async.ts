/** Use Axios to get data from restcountries api */
import axios, { AxiosResponse } from "axios"

const BASE_URL = "https://restcountries.eu/rest/v2"

/** Use the free API https://restcountries.eu/
 * You will use the following endpoints
 * https://restcountries.eu/rest/v2/name/{name} for countries by name
 * https://restcountries.eu/rest/v2/regionalbloc/{regionalbloc} for region blocks
 */

/** Create getCountry Function here
 * API-DOC => https://restcountries.eu/#api-endpoints-name
 */
async function getCountry(countryName: string) {
  const { data } = await axios(`${BASE_URL}/name/${countryName}`)
  if (Array.isArray(data)) {
    const { capital, region, numericCode } = data[0]
    return { capital, region, numericCode }
  }
  throw new Error("Error happen")
}

/** Create a test for this getRegion function
 * API-DOC => https://restcountries.eu/#api-endpoints-regional-bloc
 */
async function getRegionCountries(regionalbloc: string) {
  const { data: countriesList } = await axios(`${BASE_URL}/regionalbloc/${regionalbloc}`)

  return Array.isArray(countriesList) && countriesList.map(({ name }) => name)
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(region: string) {
  // get all countries in the target region
  const countries = await getRegionCountries(region)
  let promisesArr: AxiosResponse<any>[] = []
  if (Array.isArray(countries)) {
    const promises = countries.map((endpoint: string) => axios(`${BASE_URL}/name/${endpoint}`))
    promisesArr = await Promise.all(promises)
  }
  return promisesArr.map((promise: AxiosResponse) => promise.data[0].capital)
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals,
}
