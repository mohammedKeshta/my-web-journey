import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="jumbotron">
      <h1>Site Administration</h1>
      <p>React, Flux and React Router for ultra-responsive web app</p>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  )
}

export default Home
