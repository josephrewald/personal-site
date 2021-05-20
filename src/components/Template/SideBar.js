import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Joseph Rewald</h2>
        <p><a href="mailto:joseph.rewald@gmail.com" target="_blank" rel="noopener noreferrer">joseph.rewald@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I&apos;m Joseph - a mechanical engineer with experience in power generation, storage and
        handling of chemicals, wastewater treatment and more.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Joseph Rewald <Link to="/">rewald.engineer</Link>.</p>
    </section>
  </section>
);

export default SideBar;
