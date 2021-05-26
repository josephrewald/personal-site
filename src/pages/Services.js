import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Office from '../components/Services/Office';

const sections = [
  'Microsoft Office and VBA scripting',
];

const Services = () => (
  <Main
    title="Services"
    description="Joseph Rewald's services."
  >
    <article className="post" id="services">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="services">Services</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Microsoft Office and VBA>
        <iframe
          title="spreadsheet_shenanigans"
          width="802"
          height="346"
          frameBorder="0"
          scrolling="no"
          src="https://onedrive.live.com/embed?resid=EAF0AAEFF49E769D%211981&authkey=%21ACIdZAQ0SE0oswo&em=2&wdAllowInteractivity=False&AllowTyping=True&ActiveCell='Tabelle1'!A1&wdInConfigurator=True"
        />
      </Microsoft Office and VBA>
      <Office data={office} />

    </article>
  </Main>
);

export default Services;
