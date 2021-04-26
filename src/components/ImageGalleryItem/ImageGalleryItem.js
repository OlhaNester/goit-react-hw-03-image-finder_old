import React from 'react';
import styles from './ImageGalleryItem.module.css';

//import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, src, alt, largeImageURL, onClick }) => {
  return (
    <li className={styles.ImageGalleryItem} key={id}>
      <img
        src={src}
        alt={alt}
        largeimageurl={largeImageURL}
        onClick={onClick}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

export default ImageGalleryItem;
