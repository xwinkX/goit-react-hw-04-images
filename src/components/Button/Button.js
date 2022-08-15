import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => (
  <button onClick={loadMore} type="button" className={css.button}>
    Load more
  </button>
);

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
