import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

let data1
const Home = () => {
  useEffect(() => {
    const { data } = axios.get('/api/hello')
    data1 = data
  }, [])

  return (
    <div className=''>
      <h1>check {data1}</h1>
      <h1>home page</h1>
      <Link to='dashboard'>dashboard</Link>
    </div>
  )
}

export default Home
