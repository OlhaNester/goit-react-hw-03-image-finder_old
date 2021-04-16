import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
        <Button>
          <Loader />
        </Button>
      </div>
    );
  }
}

export default App;
