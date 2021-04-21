import React from 'react';
import styles from './ImageGalleryItem.module.css';

//import PropTypes from 'prop-types';

const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, tags }) => (
    <li className={styles.ImageGalleryItem}>
      <img
        id={id}
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  ));
};

export default ImageGalleryItem;
