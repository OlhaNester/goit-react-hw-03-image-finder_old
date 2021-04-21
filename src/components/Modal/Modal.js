import React, { Component } from 'react';
import styles from './Modal.module.css';
//import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
