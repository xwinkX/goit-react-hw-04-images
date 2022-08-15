import css from 'components/Searchbar/Searchbar.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  render() {
    const { onSubmit } = this.props;
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
}
