import React from 'react'
import { Link } from 'react-router-dom'

export const UserPage = () => {
  return (
    <div>
        <h1>UserPage</h1>
        <Link to={'/'}> go to main</Link>
    </div>
  )
}
