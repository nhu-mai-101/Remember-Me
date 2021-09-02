import React from 'react';
import styled from 'styled-components';
import background from '../../../images/background.png';

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${background});
  padding: 20px;
  z-index: 2;
  border: 5px solid white;
  border-radius: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  color: white;
  align-items: center;
  font-family: Arial;
  text-align: justified;
`;

const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .7);
  z-index: 1000;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  border: 3px solid white;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  background-image: url(${background});
  color: white;
`;

const WinnerModal = ({show, handleStartOver, planetFact}) => {
  if (!show) {
    return null
  } else if (show && planetFact !== null) {
    return null
  } else if (show && planetFact === null) {
    return (
      <Overlay>
        <Modal>
          <Description>
            <h1>You Win!</h1>
          </Description>
          <Button onClick={handleStartOver}>PLAY AGAIN</Button>
        </Modal>
      </Overlay>
    )
  }

};

export default WinnerModal;