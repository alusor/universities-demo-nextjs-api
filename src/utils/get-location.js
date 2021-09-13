import { IP_API } from '../constants'

async function getLocation (query = '') {
  const data = await fetch(`${IP_API}${query}`)
  const json = await data.json()
  return json
}

export default getLocation
