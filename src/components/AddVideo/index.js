import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { AddVideoForm } from './styles';

class AddVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lecture: '',
      url: '',
    };
  }

  onSubmit = event => {
    const { lecture, url } = this.state;
    this.props.firebase.videos().push({
      lecture: lecture,
      url: url,
      createdAt: Date.now(),
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
        <button type="submit">ADD VIDEO</button>
      </AddVideoForm>
    );
  }
}

export default withFirebase(AddVideo);
