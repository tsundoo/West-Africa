import React, { useState } from 'react';
import { images } from '../../constants';
import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logo} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                <li className='p__opensans'><a href="#home">Accueil</a></li>
                <li className='p__opensans'><a href="#events">Events</a></li>
                <li className='p__opensans'><a href="#menu">Menu</a></li>
                <li className='p__opensans'><a href="#about">About</a></li>
                <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>


            <div className='app__navbar-smallscreen'>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='app__navbar-smallscreen-overlay flex__center slide-bottom'>
                        <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                        <ul className='app__navbar-smallscreen-links'>
                            <li className='p__opensans'><a href="#home">Accueil</a></li>
                            <li className='p__opensans'><a href="#events">Events</a></li>
                            <li className='p__opensans'><a href="#menu">Menu</a></li>
                            <li className='p__opensans'><a href="#about">About</a></li>
                            <li className='p__opensans'><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;