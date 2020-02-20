import React, { Component, Fragment } from 'react';

// import Navigation from '../Navigation';
import Player from '../Player';

import { withFirebase } from '../Firebase';

class App extends Component {
  state = {
    loading: false,
    videos: [],
  };

  getTerm({ createdAt }) {
    const terms = [{ fe18: [1533153603000, 1559419203000] }, { fe19: [1564689603000, 1591041603000] }, { fe20: [1596312003000, 1625169603000] }]; // start + end of terms
    return terms.reduce((acc, term) => {
      const name = Object.keys(term).toString();
      const start = term[name][0];
      const end = term[name][1];

      /*       console.log(typeof start + " start: " + start)
            console.log(typeof createdAt + " createdAt: " + createdAt)
            console.log(typeof end + " end: " + end)
            console.log(typeof name + " name: " + name)
            console.log(typeof acc + " acc: " + acc)
      
            if (createdAt > start) {
              console.log("GT s")
            }
            if (createdAt < start) {
              console.log("LT s")
            }
            if (createdAt > end) {
              console.log("GT e")
            }
            if (createdAt < end) {
              console.log("LT e")
            } */
      return (!acc && createdAt > start && createdAt < end) ? name : acc;
      /*       if (!acc && createdAt > start && createdAt < end) {
              return name;
            }
            return acc */
    }, '')
  }


  componentDidMount() {
    this.setState({ loading: true });
    const { firebase } = this.props;

    firebase.videos().on('value', snapshot => {
      const videoObject = snapshot.val();
      if (videoObject) {
        const loadedVideos = Object.keys(videoObject).map(key => ({
          ...videoObject[key],
          uid: key,
          term: this.getTerm(videoObject[key])
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
