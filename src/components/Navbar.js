/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { IoMenu } from 'react-icons/io5';

const Navbar = () => {

    const style = css`

    height: 15em;
    position: relative;
    padding: 1em 1em 0;

    & .container {
        display: flex;
        justify-content: space-between;
        align-items: top;
    }

    & .logo {
            max-width: 15em;
            padding: 0 1em;
    }

    & .menu-icon {
        display: none;
    }

    & .nav-elements ul {
        display: flex;
        padding-top: 1em;
        list-style-type: none;
        font-family: 'Source Sans Pro', sans-serif;
    }

    & .nav-elements ul li:not(:last-child) {
            padding-right: 2em;
    }

    & .nav-elements ul a.active {
        color: #95c11f;
        position: relative;
    }

@media (max-width: 750px) {
    height: 11em;

  .nav-elements ul li:not(:last-child) {
    padding-right: 1em;
  }

  .logo {
    max-width: 10em;
    padding: 0 0.5em;
    }
}

@media (max-width: 600px) {
    height: 9em;
    font-size: 1.2em;

    .menu-icon {
        display: block;
        cursor: pointer;
        font-size: xx-large;
    }

    .logo {
            max-width: 8em;
        }

    & .nav-elements {
        position: absolute;
        right: 0;
        top: 9em;
        width: 0px;
        transition: all 0.3s ease-in;
        overflow: hidden;
        background-color: rgba(149, 193, 31, 0.75);
        padding-bottom: 2em;
    }

    & .nav-elements.active {
        width: 100%;
    }

    & .nav-elements ul {
        display: flex;
        flex-direction: column;
    }

    & .nav-elements ul li {
        margin-right: unset;
        padding: 1em 1.5em 0;
    }

    & .nav-elements ul a.active {
        border-bottom: 1px solid black;
        color: white;
    }
}

`
const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  const closeMenu = () => { 
    setShowNavbar(false);  
};

    return ( 
        <nav css={style}>
            <div className="container">

                <div className='logo'>
                    <NavLink to="/" onClick={closeMenu}>
                        <img src="./images/logo.png" alt="Let om livet logo" />
                    </NavLink>
                </div>

                <div className='menu-icon' onClick={handleShowNavbar}>
                    <IoMenu />
                </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>

                <ul className='navigation'>
                        <li>
                            <NavLink to="/" onClick={closeMenu}>Forside</NavLink>
                        </li>
                        <li>
                            <NavLink to="/vægttab" onClick={closeMenu}>Vægttabsmedicin</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/fysioterapi" onClick={closeMenu}>Fysioterapi</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/træning" onClick={closeMenu}>Personlig træning</NavLink>
                        </li>

                        <li>
                            <NavLink to="/pilatesreformer" onClick={closeMenu}>Pilates reformer</NavLink>
                        </li>

                        <li>
                            <NavLink to="/priser" onClick={closeMenu}>Forløb og priser</NavLink>
                        </li>
                    </ul> 
                </div>
            </div>  
        </nav>
     );
}
 
export default Navbar;