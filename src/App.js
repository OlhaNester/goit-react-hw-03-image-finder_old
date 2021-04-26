import React, { Component } from 'react';

import Searchbar from './components/Searchbar';
import apiImage from './services/apiImage';

import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

import Button from './components/Button';
import Loader from './components/Loader';

import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    filter: '',
    showModal: false,
    largeImage: '',
    totalHits: 0,

    isLoading: false,
    error: null,
  };
  // проерка, что в стэйт уже новое значение, пора делать запрос
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.fetchImage();
    }
  }
  //управляем запросом
  handleSearch = query => {
    if (query !== '') {
      this.setState({ filter: query, page: 1, images: [] });
    }
  };

  //получение ответа с бекэнда, и пушим массив с картинками
  fetchImage = () => {
    const { page, filter } = this.state;
    const options = {
      filter,
      page,
    };
    this.setState({ isLoading: true });
    apiImage
      .fetchImage(options)
      .then(({ hits, totalHits }) => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          page: prevState.page + 1,
          totalHits: totalHits,
        }));
        if (page !== 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  // запись нового большого изображения в стейт
  showLargeImage = url => {
    this.setState({ largeImage: url });
    this.toggleModal();
  };

  //закрытие/открытие модального окна
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { images, showModal, isLoading, error, totalHits } = this.state;
    return (
      <div className={styles.app}>
        {error && <h2 className={error}>Something wrong</h2>}
        <Searchbar onSubmit={this.handleSearch} />

        <ImageGallery images={images} onClick={this.showLargeImage} />

        {showModal && (
          <Modal onClose={this.toggleModal} url={this.state.largeImage}></Modal>
        )}

        {isLoading && <Loader />}
        {images.length > 0 && images.length !== totalHits && !isLoading && (
          <Button onClick={this.fetchImage} />
        )}
      </div>
    );
  }
}

export default App;
