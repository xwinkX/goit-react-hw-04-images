import css from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  setCurrentImage,
  largeImageURL,
}) => (
  <li key={id} className={css.galleryItem}>
    <img
      onClick={() => setCurrentImage(largeImageURL)}
      className={css.image}
      src={webformatURL}
      alt="foto"
    />
  </li>
);

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  setCurrentImage: PropTypes.func.isRequired,
};
