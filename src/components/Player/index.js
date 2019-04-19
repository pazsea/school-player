import React, { Component } from '../../../node_modules/react';
import ReactPlayer from '../../../node_modules/react-player';

import {
  PlayerWrapper,
  LinkButton,
  Wrapper,
  VideoLi,
  AddVideoDiv,
} from './styles';
import AddVideo from '../AddVideo/index';

/*TODO:
1. Styla Li
2. När man klickar på LI så ska URL komma in i u Tube videon. 
 - UL ska stängas.
3. Hamburgar menu
4. När man klickar på hamburgaren så ska en sidebar dyka upp och man ska kunna signa in.
5. Insignade users ska kunna lägga till videon.



*/
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

  selectedUrl(event, selectedUrl) {
    this.setState({
      url: selectedUrl,
    });
    window.scrollTo(0, 0);
    this.setState(prevState => ({
      showPlaylist: !prevState.showPlaylist,
    }));
    event.preventDefault();
  }

  selectedVideo() {
    console.log('CLICKED');
  }
  render() {
    console.log('RENDERAS');
    const { showPlaylist } = this.state;
    const { videos } = this.props;

    return (
      <Wrapper>
        <PlayerWrapper>
          <ReactPlayer
            className="react-player"
            url={this.state.url}
            width="100%"
            controls={this.state.controls}
            // height='50%'
          />

          <LinkButton onClick={this.togglePlaylist}>
            OPEN KRILLZ0R VIDEOS PLAYLIST
          </LinkButton>
          {showPlaylist && videos
            ? videos.map((video, index) => (
                <Videos
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

function Videos({ createdAt, lecture, url, index, selectedUrl }) {
  return (
    <VideoLi key={index} onClick={event => selectedUrl(event, url)}>
      <span>Föreläsning: {lecture}</span>
      <br />
      Datum: {new Date(createdAt)}
    </VideoLi>
  );
}

export default Player;
