import React, { Component, Fragment } from 'react';

// import Navigation from '../Navigation';
import Player from '../Player';

import { withFirebase } from '../Firebase';

class App extends Component {
  state = {
    loading: false,
    videos: [],
  };
  componentDidMount() {
    this.setState({ loading: true });
    const { firebase } = this.props;

    firebase.videos().on('value', snapshot => {
      const videoObject = snapshot.val();

      const loadedVideos = Object.keys(videoObject).map(key => ({
        ...videoObject[key],
        uid: key,
      }));

      this.setState({
        videos: loadedVideos,
        loading: false,
      });
    });
  }

  render() {
    const { loading, videos } = this.state;
    return (
      <Fragment>
        {loading ? <p>Loading...</p> : <Player videos={videos} />}
      </Fragment>
    );
  }
}

export default withFirebase(App);
