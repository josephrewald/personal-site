import React from 'react';
import PropTypes from 'prop-types';

// import OfficeSkill from './Office/OfficeSkill';

const Service = ({ data }) => (
  <article className="service-container">
    <header>
      <h4 className="serviceName"><a href={data.link}>{data.serviceName}</a></h4>
      <p className="serviceDescription">{data.serviceDescription}</p>
    </header>
  </article>
);

Service.propTypes = {
  data: PropTypes.shape({
    serviceName: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
    // year: PropTypes.number.isRequired,
  }).isRequired,
};

const Office = ({ data }) => (
  <div className="office">
    <div className="link-to" id="office" />
    <div className="title">
      <h3>Microsoft Office and VBA</h3>
    </div>
    {data.map((officeSkill) => (
      <Service
        data={officeSkill}
        // key={officeSkill.serviceDescription}
      />
    ))}
  </div>
);

Office.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    serviceDescription: PropTypes.string,
    serviceName: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Office.defaultProps = {
  data: [],
};

// export default Office;
export default Service;
