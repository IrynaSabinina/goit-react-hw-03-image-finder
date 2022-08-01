import PropTypes from 'prop-types';

export const Button = ({ textContent, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {textContent}
    </button>
  );
};

Button.propTypes = {
  textContent: PropTypes.string,
  handleClick: PropTypes.func,
};
