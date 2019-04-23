import React from 'react';
import PropTypes from 'prop-types';

export default function Smurfs({ smurf }) {
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </div>
  );
}

Smurfs.propTypes = {
  smurf: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};
