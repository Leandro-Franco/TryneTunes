import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MusicaCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <h2>{trackName}</h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
        </audio>
      </div>
    );
  }
}

MusicaCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;
