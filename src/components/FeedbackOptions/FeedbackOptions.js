import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => {
  const buttonName = Object.keys(options);

  return buttonName.map(key => (
    <button
      className={s.button}
      type="button"
      key={key}
      onClick={() => handleFeedback(key)}
    >
      {' '}
      {key}{' '}
    </button>
  ));
};
FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
