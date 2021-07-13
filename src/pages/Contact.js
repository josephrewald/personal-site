import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

// TODO: re-insert this email link below and uncomment the import above.
// First come up with my own idea for something funny with the email address.
// <EmailLink />

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Joseph Rewald via email @ joseph.rewald@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <p><a href="mailto:joseph.rewald@gmail.com">joseph.rewald@gmail.com</a></p>
      </div>
      <p>Call me on: <a href="tel:+61 481 213 203">+61 481 213 203</a></p>
      <p>Or follow the familiar links below to connect. </p>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
