import locationMiddleware from '../../src/middlewares/user-location'
import { getUniversitiesByCountry } from '../../src/services/universities'

async function universities (req, res) {
  const { country } = req.headers['user-location']
  const universities = await getUniversitiesByCountry (country)
  res.status(200).json({ universities })
}

export default locationMiddleware(universities)