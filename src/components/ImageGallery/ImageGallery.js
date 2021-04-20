import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

//port PropTypes from 'prop-types';

const ImageGallery = () => {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};

export default ImageGallery;
