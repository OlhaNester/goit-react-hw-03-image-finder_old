import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

//port PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem images={images} />
    </ul>
  );
};

export default ImageGallery;
