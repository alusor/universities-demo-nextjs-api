import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getDefaultUniversities, getUniversitiesByCountry} from '../src/services/universities'
import countries from '../src/utils/countries.json'

export default function Home() {
  const [universities, setUniversities] = useState([])
  const [country, setCountry] = useState('')

  const getUniversities = async () => {
    const universitiesList = await getDefaultUniversities()
    setUniversities(universitiesList.universities)
  }
  const handleChange = (event) => {
    setCountry(event.target.value)
  }
  const handleSearch = async (event) => {
    event.preventDefault()
    const universitiesList = await getUniversitiesByCountry(country)
    setUniversities(universitiesList)
  }
  
  useEffect(() => {
    getUniversities()
  }, [])

  return (
    <>
    <Head>
      <title>
        Universities
      </title>
    </Head>
    <section>
      <form onSubmit={handleSearch}>
        <select onChange={handleChange} name="countries" id="countries">
          {
            countries.map((country) => (
              <option key={country.name} value={country.name}>{country.name}</option>
            ))
          }
        </select>
        <input type="submit" value="Buscar" />
      </form>
    </section>
    <div>
    {
      universities.map((univertisity, index) => (
        <div key={`${univertisity.name}-${index}`}>
          {univertisity.name}
        </div>
      ))
    }
    </div>
    </>
  )
}
