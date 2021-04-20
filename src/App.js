import React, { Component } from 'react';
import axios from 'axios';
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
  };

  componentDidMount() {
    const apiKey = '9657010-5b32a47b9f15e54eb73ad95a0';
    const page = 1;
    const qOnPage = 12;
    axios
      .get(
        `https://pixabay.com/api/?q='trees'&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${qOnPage}`,
      )
      .then(response => {
        console.log(response.data.hits);
        this.setState({ images: response.data.hits });
      })
      .catch(error => console.error());
  }
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
        {/* <Button>
          <Loader />
        </Button> */}
      </div>
    );
  }
}

export default App;
