import React, { Component } from 'react';
import Header from '../components/Header';
import { getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';

export default class Favorites extends Component {
  state = {
    loadingCheck: false,
    favorited: [],
    favorita: true,
  };

  async componentDidMount() {
    this.setState({ loadingCheck: true });
    const favoritedSongs = await getFavoriteSongs();
    this.setState({
      loadingCheck: false,
      favorited: favoritedSongs,
    });
  }

  changeFavorite = async (song) => {
    this.setState({ loadingCheck: true });
    await removeSong(song);
    const favoritedSongs = await getFavoriteSongs();
    this.setState({
      loadingCheck: false,
      favorited: favoritedSongs,
    });
  };

  render() {
    const { loadingCheck, favorited, favorita } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {loadingCheck
          ? <Loading />
          : favorited.map((song) => (
            <section key={ song.trackId }>
              <h2>{song.trackName}</h2>
              <audio data-testid="audio-component" src={ song.previewUrl } controls>
                <track kind="captions" />
              </audio>
              <label htmlFor="Favorita">
                Favorita
                <input
                  type="checkbox"
                  id="Favorita"
                  checked={ favorita }
                  onChange={ () => this.changeFavorite(song) }
                />
              </label>
            </section>
          ))}

      </div>
    );
  }
}
