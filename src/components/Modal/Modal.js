import React from 'react';
import styles from './Modal.module.css';
//import PropTypes from 'prop-types';

const Modal = () => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;