import React from 'react';
import styled from 'styled-components';
import back from '../../../images/back.png'
import ReactCardFlip from 'react-card-flip';

const Front = styled.img`
  border-radius: 20px;
  margin: 5px;
  padding: 2px;
  border: 2px solid white;
  background-color: white;
`;

const Back = styled.img`
  border-radius: 20px;
  background-color: white;
  margin: 5px;
  padding: 2px;
  border: 2px solid white;
  cursor: pointer;
  ${({ isInactive }) => isInactive && `
    opacity: 0;
  `}
`;

const Card = ({ card, index, handleCardClick, isDisabled, isInactive, isFlipped }) => {
  const handleClick = () => {
    !isFlipped && !isDisabled && handleCardClick(index);
  };

 return (
   <div className="scene">
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="back">
        <Back src={back} onClick={isInactive ? () => {} : handleClick} isInactive={isInactive} />
      </div>
      <div className="front">
        <Front src={card.image.default}/>
      </div>
    </ReactCardFlip>
   </div>
 )
}

export default Card;