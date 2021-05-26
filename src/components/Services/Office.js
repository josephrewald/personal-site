import React from 'react';
import PropTypes from 'prop-types';

import OfficeSkill from './Office/OfficeSkill';

const Office = ({ data }) => (
  <div className="office">
    <div className="link-to" id="office" />
    <div className="title">
      <h3>Microsoft Office and VBA</h3>
    </div>
    {data.map((officeSkill) => (
      <OfficeSkill
        data={officeSkill}
        key={officeSkill.school}
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
