import React from 'react';
import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Service = ({ service }) => (
  <div>
    <div className="split-left">
      <div className="centered">
        <h3 className="serviceName"><a href={service.link}>{service.serviceName}</a></h3>
        <p className="serviceDescription">{service.serviceDescription}</p>
      </div>
    </div>
    <div className="split-right">
      <div className="centered">
        <img src={`${PUBLIC_URL}/images/${service.serviceName}.png`} alt={service.serviceName} />
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
};

Service.defaultProps = {
  service: [],
};

export default Service;
