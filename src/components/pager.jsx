import React from 'react';
import PropTypes from 'prop-types';

const Pager = ({ activeIndex, length, onChangeActiveIndex }) => {
  if (length === 0) return null;

  const elemDots = [];

  for (let i = 0; i < length; i += 1) {
    elemDots.push(
      <li
        key={i.toString()}
        className={activeIndex === i ? 'pager_dot_a dot' : 'dot'}
        onClickCapture={() => onChangeActiveIndex(i)}
      />
    );
  }

  return <ul className="pager">{elemDots}</ul>;
};

Pager.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  onChangeActiveIndex: PropTypes.func.isRequired,
};

export default Pager;
