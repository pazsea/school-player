import React, { Component, Fragment } from 'react';

// import Navigation from '../Navigation';
import Player from '../Player';

import { withFirebase } from '../Firebase';

class App extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    const { firebase } = this.props;

    firebase.videos().on('value', snapshot => {
      const loadedVideos = snapshot.val();

      // const usersList = Object.keys(usersObject).map(key => ({
      //   ...usersObject[key],
      //   uid: key,
      // }));

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
        {loading ? <p>Loading...</p> : <Player {...videos} />}
      </Fragment>
    );
  }
}

export default withFirebase(App);
