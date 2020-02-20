import React, { Component, Fragment } from 'react';

// import Navigation from '../Navigation';
import Player from '../Player';
import { withFirebase } from '../Firebase';
import { getTerm } from '../../constants/functions';

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
      if (videoObject) {
        const loadedVideos = Object.keys(videoObject).map(key => ({
          ...videoObject[key],
          uid: key,
          term: getTerm(videoObject[key])
        }));

        this.setState({
          videos: loadedVideos,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    //this.props.firebase.videos().off();
  }

  render() {
    const { loading, videos } = this.state;
    return (
      <Fragment>
        {loading ? <p>Laddar...</p> : <Player videos={videos} />}
      </Fragment>
    );
  }
}

export default withFirebase(App);
