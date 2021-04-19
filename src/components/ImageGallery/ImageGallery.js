import React, {Component} from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';
import axios from 'axios';
//port PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    images: [],
    //isLoading: false;
    
  };
  componentDidMount() {
    axios.get(`https://pixabay.com/api/?q=что_искать&page=${page}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${qOnPage}`).then(response => console.log(response));
  const apiKey = '9657010-5b32a47b9f15e54eb73ad95a0';
  }
  return(
    
    // <ul className={styles.ImageGallery}>
    //   <ImageGalleryItem />
    // </ul>
  );
};

export default ImageGallery;
