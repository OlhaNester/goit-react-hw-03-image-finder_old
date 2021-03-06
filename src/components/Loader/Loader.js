import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
export default class App extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#3f51b5"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
