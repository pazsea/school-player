import React, { Component } from '../../../node_modules/react';
import ReactPlayer from '../../../node_modules/react-player';

import { compareDescending } from '../../constants/functions';

import {
  PlayerWrapper,
  LinkButton,
  Wrapper,
  VideoLi,
  AddVideoDiv,
} from './styles';
import AddVideo from '../AddVideo/index';

class Player extends Component {
  state = {
    url: null,
    controls: true,
    showPlaylist: false,
  };

  togglePlaylist = () => {
    this.setState(prevState => ({
      showPlaylist: !prevState.showPlaylist,
    }));
  };

  selectedUrl = (event, selectedUrl) => {
    this.setState({
      url: selectedUrl,
    });
    window.scrollTo(0, 0);
    this.setState(prevState => ({
      showPlaylist: !prevState.showPlaylist,
    }));
    event.preventDefault();
  };

  render() {
    console.log('RENDERAS');
    const { showPlaylist, url, controls } = this.state;
    const { videos } = this.props;
    return (
      <Wrapper>
        <PlayerWrapper>
          {url ? (
            <ReactPlayer
              className="react-player"
              url={url}
              width="100%"
              controls={controls}
              // height='50%'
            />
          ) : null}

          <LinkButton onClick={this.togglePlaylist}>
            OPEN VIDEO PLAYLIST
          </LinkButton>
          {showPlaylist && videos
            ? videos
                .sort(compareDescending)
                .map((video, index) => (
                  <Videos
                    key={'videoComponent' + index}
                    video={video}
                    index={index}
                    selectedUrl={this.selectedUrl}
                  />
                ))
            : null}

          <AddVideoDiv>
            <i className="fas fa-plus-circle fa-4x" />
          </AddVideoDiv>
          <AddVideo />
        </PlayerWrapper>
      </Wrapper>
    );
  }
}

function Videos({ video, index, selectedUrl }) {
  return (
    <VideoLi
      key={'li' + index}
      onClick={event => selectedUrl(event, video.url)}
    >
      <span key={'span' + index}>Föreläsning: {video.lecture}</span>
      <br />
      Datum: {new Date(video.createdAt).toLocaleDateString()}
      <i className="fab fa-youtube fa-2x" />
    </VideoLi>
  );
}

export default Player;
