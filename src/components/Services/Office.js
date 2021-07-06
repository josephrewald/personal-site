import React from 'react';
import PropTypes from 'prop-types';

// import OfficeSkill from './Office/OfficeSkill';

const OfficeSkill = ({ data }) => (
  <article className="office-skill-container">
    <header>
      <h4 className="office-skill">{data.degree}</h4>
      <p className="school"><a href={data.link}>{data.school}</a>, {data.year}</p>
    </header>
  </article>
);

OfficeSkill.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

const Office = ({ data }) => (
  <div className="office">
    <div className="link-to" id="office" />
    <div className="title">
      <h3>Microsoft Office and VBA</h3>
    </div>
    {data.map((officeSkill) => (
      <OfficeSkill
        data={officeSkill}
        // key={officeSkill.school}
      />
    ))}
  </div>
);

Office.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

Office.defaultProps = {
  data: [],
};

export default Office;
