import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <>
        <Searchbar />
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Picter</h1>
            <p>hgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhgjhjgh</p>
            <button type="button" onClick={this.toggleModal}>
              Close Modal
            </button>
          </Modal>
        )}
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </>
    );
  }
}
