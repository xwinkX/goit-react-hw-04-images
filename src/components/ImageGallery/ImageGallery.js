import css from 'components/ImageGallery/ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, setCurrentImage }) => (
  <ul className={css.gallery}>
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        id={id}
        key={id}
        webformatURL={webformatURL}
        setCurrentImage={setCurrentImage}
        largeImageURL={largeImageURL}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  setCurrentImage: PropTypes.func.isRequired,
};
