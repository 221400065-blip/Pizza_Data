import React, { use } from 'react'
// import pizzas from '../pizzasdata.js'
import Pizza from '../components/Pizza.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function HomeScreen() {
  const [pizzas, setPizzas] = useState([])
  const[error, setError] = useState('')
  const [loading, setLoading] = useState(true)

useEffect(() => {
  const fetchPizzas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getPizzas')
      setPizzas(response.data)
      setLoading(false)
    } catch (error) {
      setError('Failed to load pizzas')
      setLoading(false)
    }
  }

  fetchPizzas()
})

  return (
    <div className='row'>
  {loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) :(
    pizzas.map((pizza)=>(
        
       <div className='col-md-4'> 
       <Pizza pizza={pizza}/>
       </div>
       )) 
  )}
  </div>
  )
  
}
