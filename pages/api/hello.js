// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import locationMiddleware from '../../src/middlewares/user-location'

async function hello (req, res) {
  const location = req.headers['user-location']
  const { city, countryCode, lat, lon, isp } = location
  res.status(200).json({ city, countryCode, lat, lon, isp })
}

export default locationMiddleware(hello)