import React, {useState} from 'react';

import {images} from '../../imports/';
import {HiMenuAlt4, HiX} from 'react-icons/hi';
import {motion} from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Work', 'Skills', 'Contact'];
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>

      {/* Navbar on mobile */}
      <div className="app__nabvar-menu">
        <HiMenuAlt4 onclick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onclick={() => setToggle(false)} />
            {navLinks.map((item) => (
              <li key={`link-${item}`}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>
                  {' '}
                  {item}{' '}
                </a>
              </li>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
