import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';
import MusicaCard from '../components/MusicaCard';

export default class Album extends Component {
  state = {
    loadingStatus: false,
    artistName: '',
    albumName: '',
    album: [],
  };

  componentDidMount() {
    this.renderAlbum();
  }

  renderAlbum = async () => {
    const { match: { params: id } } = this.props;
    const list = await getMusics(id.id);
    console.log(list);
    this.setState({
      artistName: list[0].artistName,
      albumName: list[0].collectionName,
      album: list,
    });
  };

  render() {
    const { loadingStatus, artistName, albumName, album } = this.state;
    if (loadingStatus) {
      return (
        <header>
          <Loading />
        </header>
      );
    }
    return (
      <div data-testid="page-album">
        <Header />
        <h1 data-testid="album-name">{albumName}</h1>
        <h2 data-testid="artist-name">{artistName}</h2>
        {/* https://stackoverflow.com/questions/60411755/js-react-map-method-filter-on-element-index-only-run-if-index-meets-condi */}
        {album
          // .slice(1)
          .filter((el, ind) => (ind > 0))
          .map((song) => (
            <MusicaCard
              key={ song.artistiName }
              song={ song }
            />
          ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
