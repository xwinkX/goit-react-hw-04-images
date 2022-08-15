
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import  Searchbar  from './Searchbar/Searchbar';
import  Modal  from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { apiImg } from '../api/apiImg'; 
import { useEffect, useState } from 'react';


export default function App() {

  const [imagesName, setImagesName] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');
  
  useEffect(() => {
    if (imagesName.trim() === '') {
     return;
    }
  
   setLoading(true);
      apiImg(imagesName, page)
        .then(images =>
          setImages(prevState => ([
              ...prevState,
              ...images.hits.map(({ id, webformatURL, largeImageURL }) => {
                return { id, webformatURL, largeImageURL };
              }),
            ])),
          
        )
        .finally(() => setLoading(false));

  }, [imagesName, page]);


  const handleSubmit = event => {
    event.preventDefault();
    setImagesName(event.target.name.value);
    setImages([]);
    setPage(1);
    
 };

 const onLoadMore = () => {
    setPage(prevState => ( prevState + 1 ));
   } 
   
  const closeModal = () => {
    setImage('');
  };
  
  const setCurrentImage = url => {
     setImage(url);
   }
   
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '16px',
      paddingBottom: '24px',
    }}>
      <Searchbar onSubmit={handleSubmit} />
      {images.length > 0 && <ImageGallery images={images} imagesName={imagesName} setCurrentImage={setCurrentImage} />}
      {loading && <Loader />}
      {imagesName && <Button loadMore={onLoadMore} />}
      {image && <Modal img={image} onClose={closeModal} />}
   </div>
  );
}


