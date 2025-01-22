import PropTypes from 'prop-types';

export const Loading = ({ message = 'Loading...' }) => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>{message}</p>
  </div>
);

Loading.propTypes = {
  message: PropTypes.string
};