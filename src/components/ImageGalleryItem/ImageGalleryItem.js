import React,  from 'react';
import styles from './ImageGalleryItem.module.css';

//import PropTypes from 'prop-types';

const ImageGalleryItem = () => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src="" alt="" className={styles.ImageGalleryItem_image} />
    </li>
  );
};

export default ImageGalleryItem;
