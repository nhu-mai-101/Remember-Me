import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const Board = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 750px;
`;

const StartOver = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 150px;
  border: 3px solid black;
  border-radius: 10px;
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.div`
  display:flex;
  justify-content:center;
`;

const App = ({ planets }) => {
  const [cards, setCards] = useState(planets.concat(planets));
  return (
    <Page>
        <Title>Remember Me</Title>
      <Board>
        {cards.map((card, index) => {
          return (
            <Card card={card} key={index} />
          )
        })}
        <StartOver>START OVER</StartOver>
      </Board>
    </Page>
  )
}

export default App;