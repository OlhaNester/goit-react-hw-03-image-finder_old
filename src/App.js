import React, { Component } from 'react';

import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

//import Button from './components/Button';
//import Loader from './components/Loader';
//import './App.css';

class App extends Component {
  state = {
    images: [],
    filter: '',
    showModal: false,
    //isLoading: false,
    //error: null,
  };

  handleSearch = query => {
    this.setState({ filter: query });
  };

  componentDidMount() {}
  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {/* <Button>
          <Loader />
        </Button> */}
      </div>
    );
  }
}

export default App;
