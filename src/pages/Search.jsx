import React, { Component } from 'react';
import Header from '../components/Header';
// import SearchArtist from '../components/SearchArtist';

export default class Search extends Component {
  state = {
    user: '',
  };

  render() {
    const { user } = this.state;
    const searchLength = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <br />
        <form>
          <input
            type="text"
            name="getArtist"
            data-testid="search-artist-input"
            onChange={ ({ target }) => this.setState({ user: target.value }) }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ user.length < searchLength }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
