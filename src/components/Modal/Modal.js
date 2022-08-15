import css from 'components/Modal/Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

export default function Modal({ onClose, img }) {
  const handelClickEscape = useMemo(
    () => event => {
      if (event.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );
  useEffect(() => {
    window.addEventListener('keydown', handelClickEscape);
    return () => window.removeEventListener('keydown', handelClickEscape);
  }, [handelClickEscape]);

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button
          className={css.button_modal}
          type="button"
          onClick={onClose}
        ></button>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
