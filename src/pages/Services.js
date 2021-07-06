import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Service from '../components/Services/Service';

import services from '../data/services';

const sections = [
  'MS Office and VBA',
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
      <Service data={services} />
      <iframe
        title="spreadsheet_shenanigans"
        width="802"
        height="346"
        frameBorder="0"
        scrolling="no"
        src="https://onedrive.live.com/embed?resid=EAF0AAEFF49E769D%211981&authkey=%21ACIdZAQ0SE0oswo&em=2&wdAllowInteractivity=False&AllowTyping=True&ActiveCell='Tabelle1'!A1&wdInConfigurator=True"
      />

    </article>
  </Main>
);

export default Services;
