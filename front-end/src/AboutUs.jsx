
import { useState, useEffect } from 'react'
import axios from 'axios'

const AboutUs = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:5002/about-us')
      .then(res => setData(res.data))
      .catch(err => console.error(err))
  }, [])

  if (!data) return <p>Loading...</p>

  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt="Me" style={{ maxWidth: '300px' }} />
      {data.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  )
}

export default AboutUs