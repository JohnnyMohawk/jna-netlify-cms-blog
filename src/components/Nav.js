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
      <NavLink className='jmLink' id="JML" to='/about/' exact>
        ¿Johnny Mohawk?
      </NavLink>
      <NavLink className='jmLink' to='/blog/' exact>
        Bloggery
      </NavLink>
      <NavLink className='jmLink' to='/contact/' exact>
        Say Hello
      </NavLink>
    </div>
  </nav>
)
