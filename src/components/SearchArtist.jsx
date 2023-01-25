import React, { Component } from 'react';

export default class SearchArtist extends Component {
  state = {
    user: '',
  };

  render() {
    const { user } = this.state;
    const searchLength = 2;
    return (
      <form>
        <input
          type="text"
          name="getArtist"
          data-testid="search-artist-input"
          onChange={ ({ target }) => this.setState({ user: target.value }) }
        />
        <button
          type="button"
          data-test="search-artist-button"
          disabled={ user.length < searchLength }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}
