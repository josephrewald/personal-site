import React from 'react';
import PropTypes from 'prop-types';

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

export default OfficeSkill;
