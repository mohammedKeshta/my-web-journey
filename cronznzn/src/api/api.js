import axios from 'axios'

import { BASE_URL, CONFIRMED_PATH, COUNTRIES_PATH, DAILY_PATH, URLComposer } from '../config/API'

export async function fetchSummery(country) {
  let url = URLComposer(BASE_URL);
  if (!!country) {
    url = URLComposer(BASE_URL, COUNTRIES_PATH, `/${country}`);
  }
  return await axios.get(url)
}

export async function fetchDaily () {
  return await axios.get(URLComposer(BASE_URL, DAILY_PATH))
}

export async function fetchCountries() {
  return await axios.get(URLComposer(BASE_URL, COUNTRIES_PATH))
}

export async function fetchConfirmed() {
  return await axios.get(URLComposer(BASE_URL, CONFIRMED_PATH))
}
