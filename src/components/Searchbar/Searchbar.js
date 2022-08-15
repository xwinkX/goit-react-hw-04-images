import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onSubmit }) {
  return (
    <header className={css.searchbar}>
      <form onSubmit={onSubmit} className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.buttonlabel}>Search</span>
        </button>

        <input
          name="name"
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
