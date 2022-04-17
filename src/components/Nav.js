import React from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

export default ({ handlePopupOpen }) => (
  <nav className='Nav'>
    <div className='Nav--Container container'>
      <Link to='/'>
        <Logo />
      </Link>
      {/* <NavLink to='/' exact>
        Home
      </NavLink> */}
      <NavLink to='/about/' exact>
        who
      </NavLink>
      <NavLink to='/blog/' exact>
        words
      </NavLink>
      <NavLink to='/contact/' exact>
        connect
      </NavLink>
    </div>
  </nav>
)
