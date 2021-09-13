import { UNIVERSITIES_API } from '../constants'


async function getUniversitiesByCountry (country = '') {
  const universitiesResponse = await fetch (`${UNIVERSITIES_API}search?country=${country}`)
  const parsedResponse = await universitiesResponse.json()
  return parsedResponse
}

async function getDefaultUniversities () {
  const universitiesResponse = await fetch('/api/universities')
  const parsedResponse = await universitiesResponse.json()
  return parsedResponse
}

export {
  getUniversitiesByCountry,
  getDefaultUniversities
}