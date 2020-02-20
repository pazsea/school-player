import styled from 'styled-components';

export const SubmitContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  /* transform: translate(-2%, -50%); */
  transition: all 0.7s ease-in-out;
  transform: ${props =>
    props.modalOpen
      ? 'translate(-2%, -50%)'
      : 'translate(92%, -50%)'};
  display: flex;
  width: 50%;
  background-color: white;
  border: ${props =>
    props.modalOpen ? '1px solid lightcoral' : '1px solid #6369d1'};
  border-radius: 10px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    width: 95%;
  }

  .toggleModalButton {
    flex: 1;
    padding: 0 0.5rem 0 0;

    button {
      color: white;
      height: 100%;
      width: 100%;
      cursor: pointer;
      border: none;
      transition: all 0.7s ease-in-out;

      background-color: ${props =>
        props.modalOpen ? 'lightcoral' : '#6369d1'};

      &:focus {
        outline: none;
      }

      svg {
        transition: all 0.7s ease-in-out;

        transform: ${props =>
          props.modalOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
      }
    }
  }
`;

export const AddVideoForm = styled.form`
  flex: 10;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 2rem;

  input:nth-child(1) {
    width: 100%;
    padding: 1em;
    margin-top: 10%;
    border: 1px solid lightgrey;
  }
  input:nth-child(2) {
    width: 100%;
    padding: 1em;
    margin-top: 5%;
    border: 1px solid lightgrey;
  }
  button {
    margin-top: 10%;
    width: 100%;
    font-weight: 700;
    color: white;
    padding: 15px 25px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.21);
    background-color: #ffa83b;
    border-bottom-color: rgba(0, 0, 0, 0.34);
    :active {
      top: 1px;
      border-color: rgba(0, 0, 0, 0.34) rgba(0, 0, 0, 0.21)
        rgba(0, 0, 0, 0.21);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.89),
        0 1px rgba(0, 0, 0, 0.05) inset;
      position: relative;
    }
    :focus {
      outline: none;
    }
  }
`;
