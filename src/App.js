import React, { Component } from 'react';

import Searchbar from './components/Searchbar';
import apiImage from './services/apiImage';

import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';

import Button from './components/Button';
import Loader from './components/Loader';

//import './App.css';

class App extends Component {
  state = {
    images: [],
    page: 1,
    filter: '',
    // showModal: false,
    // isLoading: false,
    //error: null,
  };
  // проерка, что в стэйт уже новое значение, пора делать запрос
  componentDidUpdate(prevProps, prevState) {
    if (prevState.filter !== this.state.filter) {
      this.fetchImage();
    }
  }

  handleSearch = query => {
    this.setState({ filter: query, page: 1, images: [] });
  };
  fetchImage = () => {
    const { page, filter } = this.state;
    const options = {
      filter,
      page,
    };
    apiImage.fetchImage(options).then(hits => {
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        page: prevState.page + 1,
      }));
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { images, showModal, isLoading } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        {/* <ul>
          {' '}
          {images.map(({ id, webformatURL, tags }) => (
            <li key={id}>
              <img src={webformatURL} alt={tags} />
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.fetchImage}>
          {' '}
          Загрузить еще
        </button> */}

        <ImageGallery images={images} />
        {/* <button type="button" onClick={this.toggleModal}>
          {' '}
          Открыть модалку
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello!</h1>
            <button type="button" onClick={this.toggleModal}>
              {' '}
              Закрыть модалку
            </button>
          </Modal>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button />}   */}
      </div>
    );
  }
}

export default App;
