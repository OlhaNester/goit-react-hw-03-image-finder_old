import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

//port PropTypes from 'prop-types';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            id={id}
            src={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            onClick={() => onClick(largeImageURL)}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
