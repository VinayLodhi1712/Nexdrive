// components/ExampleCarouselImage.js
import React from 'react';
import PropTypes from 'prop-types';

function ExampleCarouselImage({ text }) {
  return (
    <div style={{ height: '400px', backgroundColor: 'lightgray', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h3>{text}</h3>
    </div>
  );
}

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
