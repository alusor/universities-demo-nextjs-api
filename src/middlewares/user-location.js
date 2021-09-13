import getLocation from "../utils/get-location"

const locationMiddleware = (handler) => async (req, res) => {
  const {city, countryCode, lat, lon, isp, country} = await getLocation(req.headers['x-forwarded-for'])
  req.headers['user-location'] = {
    city, countryCode, country, lat, lon, isp
  }
  return handler(req, res)
}

export default locationMiddleware 
