import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class SearchAlbum extends Component {
  state = {
    artist: '',
    artistResult: '',
    loadingStatus: false,
    albums: [],
    trySearch: false,
  };

  getAlbum = async () => {
    const { artist } = this.state;
    this.setState({ loadingStatus: true });
    const result = await searchAlbumsAPI(artist);
    this.setState({
      artist: '',
      artistResult: artist,
      loadingStatus: false,
      albums: result,
      trySearch: true,
    });
  };

  render() {
    const { loadingStatus, artist, artistResult,
      albums, trySearch } = this.state;
    const searchLength = 2;
    if (loadingStatus) {
      return (
        <header>
          <Loading />
        </header>
      );
    }
    return (
      <div>
        <form>
          <input
            type="text"
            name="getArtist"
            data-testid="search-artist-input"
            value={ artist }
            onChange={ ({ target }) => this.setState({ artist: target.value }) }
          />
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ artist.length < searchLength }
            onClick={ this.getAlbum }
          >
            Pesquisar
          </button>
        </form>
        {trySearch && (
          <section>
            {
              albums.length < 1 && <span> Nenhum álbum foi encontrado </span>
            }
          </section>)}
        {albums.length > 0 && (
          <span>
            Resultado de álbuns de:
            {' '}
            { artistResult }
          </span>
        )}
        { albums.map((album) => (
          <section key={ album.artistId }>
            <h3>{album.artistName}</h3>
            <img src={ album.artworkUrl100 } alt={ album.collectionName } />
            <h4>
              {album.collectionName}
              {' '}
              com
              {' '}
              {album.trackCount}
              {' '}
              títulos
            </h4>
            <h4>{album.releaseDate}</h4>
            <Link
              data-testid={ `link-to-album-${album.collectionId}` }
              to={ `/album/${album.collectionId}` }
            >
              mais detalhes
            </Link>
          </section>
        ))}
      </div>
    );
  }
}
