import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Service = ({ service }) => (
  <div>
    <div className="split-left">
      <div className="centered">
        <div className="link-to" id={`${service.serviceName}`.toLowerCase()} />
        <h3 className="serviceName">{service.serviceName}</h3>
        <p className="serviceDescription">{service.serviceDescription}</p>
        <p><Link to="/contact">Contact me for more information.</Link> </p>
      </div>
    </div>
    <div className="split-right">
      <div className="centered">
        {/* <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} /> */}
        <img src={`${process.env.PUBLIC_URL}${service.image}`} alt={service.serviceName} />
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
