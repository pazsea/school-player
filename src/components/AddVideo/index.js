import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { AddVideoForm } from './styles';

class AddVideo extends Component {
  state = {
    lecture: '',
    url: '',
    time: '',
  };

  onSubmit = event => {
    const { lecture, url, time } = this.state;
    this.props.firebase.videos().push({
      lecture: lecture,
      url: url,
      createdAt: Number([time]),
    });
    this.setState({
      lecture: '',
      url: '',
      time: '',
    });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { lecture, url, time } = this.state;
    return (
      <AddVideoForm onSubmit={this.onSubmit}>
        <input
          name="lecture"
          value={lecture}
          onChange={this.onChange}
          type="text"
          placeholder="LECTURE TITLE?"
          required
        />
        <input
          name="url"
          value={url}
          onChange={this.onChange}
          type="url"
          placeholder="URL?"
          required
        />
        <input
          name="time"
          value={time}
          onChange={this.onChange}
          type="text"
          placeholder="time?"
          required
        />
        <button type="submit">LÄGG TILL VIDEO</button>
      </AddVideoForm>
    );
  }
}

export default withFirebase(AddVideo);
