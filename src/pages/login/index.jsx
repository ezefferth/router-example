import { Link } from 'react-router-dom'

import React from 'react'

export default function Login() {
  return (
    <div>

      <h1>BEM VINDO AO LOGIN</h1>

      <Link to='/'>
        <button>
          Login
        </button>
      </Link>
    </div>



  )
}
