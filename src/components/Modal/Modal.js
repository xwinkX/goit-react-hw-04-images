import css from 'components/Modal/Modal.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  handelClickEscape = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handelClickEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelClickEscape);
  }

  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <button
            className={css.button_modal}
            type="button"
            onClick={this.props.onClose}
          ></button>
          <img src={this.props.img} alt="" />
        </div>
      </div>
    );
  }
}
