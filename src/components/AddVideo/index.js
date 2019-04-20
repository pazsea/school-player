import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { AddVideoForm } from './styles';

class AddVideo extends Component {
  state = {
    lecture: '',
    url: '',
  };

  onSubmit = event => {
    const { lecture, url } = this.state;
    this.props.firebase.videos().push({
      lecture: lecture,
      url: url,
      createdAt: Date.now(),
    });
    this.setState({
      lecture: '',
      url: '',
    });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { lecture, url } = this.state;
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
        <button type="submit">LÄGG TILL VIDEO</button>
      </AddVideoForm>
    );
  }
}

export default withFirebase(AddVideo);
