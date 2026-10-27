import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="page">
      <h2>Welcome to Task Notes</h2>
      <p>Organize your work and keep track of your tasks.</p>

      <Link to="/tasks" className="nav-button">
        View My Tasks
      </Link>
    </section>
  )
}

export default Home
