import React from 'react';
import styled from 'styled-components';

const Photo = styled.img`
  border-radius: 20px;
  margin: auto;
  padding: 5px;
`;

const Card = ({ card }) => {
 return (
   <div>
     <Photo src={card.image.default} />
   </div>
 )
}

export default Card;