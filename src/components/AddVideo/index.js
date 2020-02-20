import React, { PureComponent } from 'react';

import { withFirebase } from '../Firebase';

import { FaArrowLeft } from 'react-icons/fa';

import { AddVideoForm, SubmitContainer } from './styles';

class AddVideo extends PureComponent {
  state = {
    lecture: '',
    url: '',
    modalOpen: false,
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

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      modalOpen: !prevState.modalOpen,
    }));
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { lecture, url } = this.state;
    return (
      <SubmitContainer modalOpen={this.state.modalOpen}>
        <div className="toggleModalButton">
          <button onClick={this.toggleModal}>
            <FaArrowLeft /> <br />
            <br />A<br />D<br />D<br />
            <br />V<br />I<br />D<br />E<br />O
          </button>
        </div>
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
      </SubmitContainer>
    );
  }
}

export default withFirebase(AddVideo);
