import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Service from '../components/Services/Service';

import services from '../data/services';

const sections = [
  'Excel',
  'Inventor',
];

// const data = { services };

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

      {services.map((service) => (
        <Service service={service} />
      ))}

    </article>
  </Main>
);

export default Services;
