import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
// import Loading from './Loading';

export default class MusicaCard extends Component {
  state = {
    loadingCheck: false,
    favorita: false,
    // favoriteList: [],
  };

  async componentDidMount() {
    const { song: { trackId } } = this.props;
    // const { tracksId } = song;
    this.setState({ loadingCheck: true });
    const favoriteList = await getFavoriteSongs();
    if (favoriteList.some((song) => song.trackId === trackId)) {
      this.setState({ loadingCheck: false, favorita: true });
    }
    this.setState({ loadingCheck: false });
  }

  changeFavorite = async (list) => {
    const { favorita } = this.state;
    this.setState({ loadingCheck: true });
    console.log(favorita);
    if (!favorita) {
      await addSong(list);
      this.setState({
        favorita: true,
        loadingCheck: false,
      });
    } else {
      await removeSong(list);
      this.setState({
        favorita: false,
        loadingCheck: false,
      });
    }
  };

  render() {
    const { song } = this.props;
    const { loadingCheck, favorita } = this.state;
    return (
      <div>
        <h2>{song.trackName}</h2>
        <audio data-testid="audio-component" src={ song.previewUrl } controls>
          <track kind="captions" />
        </audio>
        <label htmlFor="Favorita">
          {loadingCheck ? 'Carregando...' : 'Favorita'}
          <input
            type="checkbox"
            data-testid={ `checkbox-music-${song.trackId}` }
            checked={ favorita }
            onChange={ () => this.changeFavorite(song) }
          />
        </label>
      </div>

    );
  }
}

MusicaCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.number,
  song: PropTypes.object,
}.isRequired;
