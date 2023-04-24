import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {

  const getLinkClass = ({ isActive }) => isActive ? 'currentPath' : '';

  return (
    <header>
      <navbar class="navbar">

        <NavLink to="/" className="logo">Sutsiki</NavLink>

        <div class="nav-links">
          <ul>

            <li>
              <NavLink to="/" className={getLinkClass}>Accueil
              </NavLink>
            </li>

            <li>
              <NavLink to="/Contact" className={getLinkClass}>Contact
              </NavLink>
            </li>

          </ul>
        </div>

      </navbar>
    </header>
  )
}
