import React from 'react';
import styled from 'styled-components';
import planetFacts from '../planetFacts.js';
import background from '../../../images/background.png';
const mercury = require('../../../images/mercuryCard.png');
const venus = require('../../../images/venusCard.png');
const earth = require('../../../images/earthCard.png');
const mars = require('../../../images/marsCard.png');
const jupiter = require('../../../images/jupiterCard.png');
const saturn = require('../../../images/saturnCard.png');
const uranus = require('../../../images/uranusCard.png');
const neptune = require('../../../images/neptuneCard.png');
const pluto = require('../../../images/plutoCard.png');
const moon = require('../../../images/moonCard.png');

const planetCardsObj = {
    Mercury: mercury,
    Venus: venus,
    Earth: earth,
    Mars: mars,
    Jupiter: jupiter,
    Saturn: saturn,
    Uranus: uranus,
    Neptune: neptune,
    Pluto: pluto,
    Moon: moon
};
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

const Modal = styled.div`
  display: flex;
  flex-direction: row;
  width: 700px;
  justify-content: center;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${background});
  padding: 20px;
  z-index: 2;
  border: 5px solid white;
  border-radius: 10px;
  opacity: 0.95;
`;

const PlanetImage = styled.img`
  padding: 3px;
  height: 300px;
  border-radius: 10px;
  background: white;
  opacity: 0.9;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  color: white;
  align-items: center;
  font-family: Arial;
  text-align: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  border: 3px solid white;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  background-image: url(${background});
  color: white;
  opacity: 0.9;
`;

const PlanetModal = ({planetFact, closePlanetModal}) => {
  const planet = planetFact
  if (planetFact === null) {
    return null
  } else if (planetFact === planet) {
      return (
    <Overlay>
      <Modal>
        <PlanetImage src={planetCardsObj[planet].default}></PlanetImage>
        <Description>
          <h1>{planet}</h1>
          <div>{planetFacts[planet]}</div>
          <br/>
          <Button onClick={closePlanetModal}>CLOSE</Button>
        </Description>
      </Modal>
    </Overlay>
  )
  }
};

export default PlanetModal;