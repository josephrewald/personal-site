import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Service = ({ service }) => (
  <div>
    <div className="split-left">
      <div className="centered">
        {/* TODO: make these links work somehow. */ }
        <div className="link-to" id={`${service.serviceName}`.toLowerCase()} />
        {/* <div className="link-to" id="cad" /> */ }
        <h3 className="serviceName">{service.serviceName}</h3>
        <p className="serviceDescription">{service.serviceDescription}</p>
        <p><Link to="/contact">Contact me for more information.</Link> </p>
      </div>
    </div>
    <div className="split-right">
      <div className="centered">
        <img src={`${PUBLIC_URL}/images/${service.serviceName}.jpg`} alt={service.serviceName} />
      </div>
    </div>
  </div>
);

Service.propTypes = {
  service: PropTypes.arrayOf(PropTypes.shape({
    serviceName: PropTypes.string,
    link: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
  })),
  // linkName: PropTypes.string.isRequired,
};

Service.defaultProps = {
  service: [],
};

export default Service;
