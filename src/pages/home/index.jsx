

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>

      <h1>BEM VINDO À HOME</h1>
      
      <Link to='/login'>
        <button>
          Login
        </button>
      </Link>


    </div>
  )
}
