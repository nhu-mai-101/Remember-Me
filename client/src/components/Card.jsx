import React from 'react';
import styled from 'styled-components';
import back from '../../../images/back.png'
import ReactCardFlip from 'react-card-flip';

const Front = styled.img`
  border-radius: 20px;
  margin: auto;
  padding: 5px;
`;

const Back = styled.img`
  border-radius: 20px;
  margin: auto;
  padding: 5px;
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