import styled from 'styled-components';

export const AddVideoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  input:nth-child(1) {
    width: 100%;
    padding: 1em;
    margin-top: 10%;
  }
  input:nth-child(2) {
    width: 100%;
    padding: 1em;
    margin-top: 5%;
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
