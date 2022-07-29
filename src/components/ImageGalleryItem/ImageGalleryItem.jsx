import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    id: '',
    webformatURL: '',
    largeImageURL: '',
  };
  render() {
    return (
      <li className={styles.ImageGalleryItem}>
        <img src="#" alt="jkhkjhkjkjk" />
      </li>
    );
  }
}
