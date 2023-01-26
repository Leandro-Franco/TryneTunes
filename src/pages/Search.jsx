import React, { Component } from 'react';
import Header from '../components/Header';
import SearchAlbum from '../components/SearchAlbum';

export default class Search extends Component {
  render() {
    return (
      <div data-testid="page-search">
        <Header />
        <br />
        <SearchAlbum />
      </div>
    );
  }
}
