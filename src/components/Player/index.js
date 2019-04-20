import React, { Component } from '../../../node_modules/react';
import ReactPlayer from '../../../node_modules/react-player';

import {
  compareDescending,
  diffDays,
} from '../../constants/functions';

import {
  PlayerWrapper,
  ShowAllButton,
  ShowTenButton,
  Wrapper,
  VideoLi,
  AddVideoDiv,
  PlaylistDiv,
} from './styles';
import AddVideo from '../AddVideo/index';

class Player extends Component {
  state = {
    url: null,
    controls: true,
    showTenVideos: true,
    showAllVideos: false,
  };

  showAllVideos = () => {
    this.setState(prevState => ({
      showAllVideos: !prevState.showAllVideos,
      showTenVideos: false,
    }));
  };

  showTenVideos = () => {
    this.setState(prevState => ({
      showTenVideos: !prevState.showTenVideos,
      showAllVideos: false,
    }));
  };

  selectedUrl = (event, selectedUrl) => {
    this.setState({
      url: selectedUrl,
    });
    window.scrollTo(0, 0);
    this.setState({
      showAllVideos: false,
      showTenVideos: false,
    });
    event.preventDefault();
  };

  render() {
    console.log('RENDERAS');
    const {
      showAllVideos,
      showTenVideos,
      url,
      controls,
    } = this.state;
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
            />
          ) : null}
          <PlaylistDiv>
            <ShowTenButton
              active={showTenVideos}
              onClick={this.showTenVideos}
            >
              SENASTE 10 FÖRELÄSNINGAR
            </ShowTenButton>
            <ShowAllButton
              active={showAllVideos}
              onClick={this.showAllVideos}
            >
              VISA ALLA
            </ShowAllButton>
          </PlaylistDiv>
          {showTenVideos && videos
            ? videos.length > 10
              ? videos
                  .sort(compareDescending)
                  .slice(0, 10)
                  .map((video, index) => (
                    <Videos
                      key={'videoComponent' + index}
                      video={video}
                      index={index}
                      selectedUrl={this.selectedUrl}
                    />
                  ))
              : videos
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

          {showAllVideos && videos
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
      <br />
      Tillagd: {diffDays(video.createdAt)} dagar sedan.
    </VideoLi>
  );
}

export default Player;
