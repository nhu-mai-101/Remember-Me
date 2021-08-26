import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Cards from './Card.jsx';
import background from '../../../images/background.jpg';
import WinnerModal from './Modal.jsx';

const Board = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  ${({ difficulty }) => {
    if (difficulty === 'easy') return `
      width: 450px;
    `
    if (difficulty === 'medium') return `
      width: 600px;
    `
    if (difficulty === 'hard') return `
      width: 750px;
    `
  }};
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

const Page = styled.div`
  display: flex;
  justify-content: center;
  // background-image: url(${background});
`;

const shuffleCards = (array) => {
  var n = array.length;
  while (n) {
    var random = Math.floor(Math.random() * n--);
    var temp = array[n];
    array[n] = array[random];
    array[random] = temp;
  }
  return array;
}

const App = ({ planets }) => {
  const easy = planets.slice(0, 3);
  const medium = planets.slice(0, 6);
  const hard = planets;

  const [difficulty, setDifficulty] = useState('medium');
  const [cards, setCards] = useState(shuffleCards(medium.concat(medium)));
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    let timeout = null;
    if (openedCards.length === 2) {
      timeout = setTimeout(checkForMatch, 500);
    }
    return () => {
      clearTimeout(timeout)
    };
  }, [openedCards]);

  useEffect(() => {
    checkCompletion();
  }, [matchedCards]);

  const disable = () => {
    setShouldDisableAllCards(true);
  };

  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (matchedCards.length === (cards.length / 2)) {
      setShowModal(true);
    }
  };

  const handleCardClick = (index) => {
    if (openedCards.length === 1) {
      setOpenedCards(openedCards.concat([index]))
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenedCards([index]);
    }
  };

  const checkIsFlipped = (index) => {
    return openedCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return matchedCards.includes(card.name);
  };

  const checkForMatch = () => {
    const first = openedCards[0];
    const second = openedCards[1];
    enable();
    if (cards[first].name === cards[second].name) {
      setMatchedCards(matchedCards.concat([cards[first].name]));
      console.log(matchedCards)
      setOpenedCards([]);
      return;
    }
    timeout.current = setTimeout(() => {
      setOpenedCards([]);
    }, 600);
  };

  const handleStartOver = () => {
    setDifficulty('medium');
    setMatchedCards([]);
    setOpenedCards([]);
    setShowModal(false);
    setCards(shuffleCards(medium.concat(medium)));
  };

  const handleEasy = () => {
    setDifficulty('easy');
    setMatchedCards([]);
    setOpenedCards([]);
    setShowModal(false);
    setCards(shuffleCards(easy.concat(easy)));
  };

  const handleHard = () => {
    setDifficulty('hard');
    setMatchedCards([]);
    setOpenedCards([]);
    setShowModal(false);
    setCards(shuffleCards(hard.concat(hard)));
  };

  return (
    <Page>
      <WinnerModal show={showModal} handleStartOver={handleStartOver} />
      <Board difficulty={difficulty}>
        {cards.map((card, index) => {
          return (
            <Cards
              card={card}
              key={index}
              index={index}
              handleCardClick={handleCardClick}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
            />
          )
        })}
        <Button onClick={handleEasy} >EASY</Button>
        <Button onClick={handleStartOver}>MEDIUM</Button>
        <Button onClick={handleHard}>HARD</Button>
        <Button onClick={handleStartOver}>START OVER</Button>
      </Board>
    </Page>
  )
}

export default App;