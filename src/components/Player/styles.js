import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: lightblue;
  width: 100%;
  height: 100%;
`;

export const PlayerWrapper = styled.div`
  margin: 2% 0 3% 0;
  width: 50%;
  display: flex;
  justify-content: center;

  flex-direction: column;

  @media (max-width: 1025px) {
    width: 95%;
  }
`;

export const AddVideoDiv = styled.div`
  margin-top: 7%;
  color: lightcoral;
  width: 100%;
  display: flex;
  justify-content: center;
  i {
    background: whitesmoke;
    border-radius: 50%;
    border: 1px solid black;
  }

  i:active {
    top: 1px;
    border-color: rgba(0, 0, 0, 0.34) rgba(0, 0, 0, 0.21)
      rgba(0, 0, 0, 0.21);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.89),
      0 1px rgba(0, 0, 0, 0.05) inset;
    position: relative;
  }
`;

export const VideoLi = styled.li`
  list-style: none;
  margin-top: 2%;
  padding: 1%;
  font-size: 1.1em;
  font-weight: 400;
  width: 100%;
  cursor: pointer;
  background: #f2f2f2;
  border: 2px solid lightseagreen;
  box-shadow: 1px 1px 2px #fff inset, -1px -1px 2px #fff inset;
  border-radius: 3px/6px;
  position: relative;
  span {
    color: red;
    font-weight: 600;
  }
  i {
    color: red;
    float: right;
    position: absolute;
    top: 20%;
    right: 2%;
  }
`;

export const PlaylistDiv = styled.div`
  display: flex;
  margin: 5% 0 0 0;
`;

export const ShowTenButton = styled.button`
  font-weight: 700;
  flex: 1;
  color: white;
  padding: 15px 25px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.21);
  background-color: ${props =>
    props.active ? '#CD5C5C' : '#87a86f'};
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
`;

export const ShowAllButton = styled.button`
  font-weight: 700;
  flex: 1;
  color: white;
  padding: 15px 25px;
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.21);
  background-color: ${props =>
    props.active ? '#CD5C5C' : '#87a86f'};
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
`;
