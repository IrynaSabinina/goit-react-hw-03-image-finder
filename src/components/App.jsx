import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { mapper } from 'utils/mapper';
import { Modal } from './Modal/Modal';
import { Rings } from 'react-loader-spinner';
import { api } from 'API/api';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    image: '',
    loading: false,
    page: 1,
    isShown: false,
    search: '',
  };

  // componentDidMount() {
  //   this.setState({ loading: true });
  //   const images = localStorage.getItem('images');
  //   if (images) {
  //     this.setState({ images: JSON.parse(images) });
  //   }
  //   this.fetchImages();
  // setTimeout(() => {
  //   fetch(
  //     'https://pixabay.com/api/?key=28362853-f4179f2b0382cbb2305a6e9dc&q=yellow+flowers&image_type=photo=page=12'
  //   )
  //     .then(res => res.json())
  //     .then(images => this.setState({ images }))
  //     .finally(() => this.setState({ loading: false }));
  // }, 2000);
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.page);
    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    this.setState({ loading: true });
    api(this.state.search, this.state.page)
      .then(({ data }) => {
        this.setState(prevs => ({
          images: [...mapper(data.hits)],
          totalImg: prevs.total,
          page: prevs.page + 1,
        }));
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleOpenModal = img => {
    console.log(img);
    this.setState({ image: true });
  };
  handleCloseModal = () => {
    this.setState({ image: '' });
  };

  handleClick = () => {
    this.setState({ isShown: true });
    this.fetchImages();
  };

  handleFormSubmit = search => {
    this.setState({ search: search });
    this.setState({ isShown: true });
    this.fetchImages();
    this.setState({ images: [] });
  };

  handlerLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
    console.log('ghghghghgfhghg');
  };

  render() {
    const { images, image, isShown, loading, search } = this.state;
    return (
      <div>
        {!isShown && <Searchbar onSubmit={this.handleFormSubmit} />}

        {isShown && (
          <>
            <ImageGallery
              handleOpenModal={this.handleOpenModal}
              images={images}
              onDelete={this.onDelete}
            />
            {loading && <Rings />}
            <Button
              textContent="Load More"
              handlerClick={this.handlerLoadMore}
            />
          </>
        )}
        {image && <Modal image={image} close={this.handleCloseModal} />}
        <ToastContainer />
      </div>
    );
  }
}
