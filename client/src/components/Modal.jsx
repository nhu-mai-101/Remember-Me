import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 2;
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  border: 3px solid black;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;

const WinnerModal = ({show, handleStartOver}) => {
  if (!show) {
    return null
  }
  return (
    <Overlay>
      <Modal>
        <div>You Win!</div>
        <Button onClick={handleStartOver}>PLAY AGAIN</Button>
      </Modal>
    </Overlay>
  )
};

export default WinnerModal;