import React from 'react';
import PropTypes from 'prop-types';

// TODO: move the data.map loop thing into Services.js
// have this class be like one section on the page.
const Service = ({ service }) => (
  <article>
    <h3 className="serviceName"><a href={service.link}>{service.serviceName}</a></h3>
    <p className="serviceDescription">{service.serviceDescription}</p>
  </article>
);

Service.propTypes = {
  service: PropTypes.arrayOf(PropTypes.shape({
    serviceName: PropTypes.string,
    link: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
  })),
};

Service.defaultProps = {
  service: [],
};

export default Service;
