import React, { Component } from '../../../node_modules/react';
import ReactPlayer from '../../../node_modules/react-player';
import App from '../App';
import { getTerm } from '../../constants/functions';

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
    addForm: false,
    start: 0,
    showCount: 10
  };

  componentDidMount() {
    const currentTerm = getTerm({ createdAt: Date.now() });
    console.log(this.props.videos.map(video => video.term));

  }
  showVideos(index = 0, count = 10) {

  }
  showPlaylist() {
    this.setState(prevState => ({
      showAllVideos: !prevState.showAllVideos,
      showTenVideos: false,
    }));
  }

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
      addForm: false,
    });
    event.preventDefault();
  };

  showAddForm = () => {
    this.setState(prevState => ({
      addForm: !prevState.addForm,
    }));
  };

  render() {
    //console.log('RENDERAS');
    const {
      showAllVideos,
      showTenVideos,
      url,
      controls,
      addForm,
      start,
      showCount
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
          {videos && videos
            .sort(compareDescending)
            .slice(start, showCount)
            .map((video, index) => (
              <Videos
                key={'videoComponent' + index}
                video={video}
                index={index}
                selectedUrl={this.selectedUrl}
              />
            ))};

          <AddVideoDiv>
            <i
              onClick={this.showAddForm}
              className="fas fa-plus-circle fa-4x"
            />
          </AddVideoDiv>
          {addForm ? <AddVideo /> : null}
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
