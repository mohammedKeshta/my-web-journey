export const BASE_URL = 'https://covid19.mathdro.id/api'
export const COUNTRIES_PATH = '/countries'
export const DAILY_PATH = '/daily'
export const CONFIRMED_PATH = '/confirmed'
export const URLComposer = (...urls) => urls.reduce((acc, curr) => acc + curr, '')