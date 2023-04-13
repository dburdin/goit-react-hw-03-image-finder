import PropTypes from 'prop-types';

import { LoadMoreButton } from './Button.styled';

export const Button = ({ title, handleLoadMoreBtn }) => {
  return (
    <LoadMoreButton type="button" onClick={handleLoadMoreBtn}>
      {title}
    </LoadMoreButton>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleLoadMoreBtn: PropTypes.func.isRequired,
};
