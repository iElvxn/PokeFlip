import { useState, useEffect, useRef } from 'react';
import characterHandler from './assets/characters';
import Header from './components/Header';
import StartScreen from './pages/StartScreen';
import GameScreen from './pages/GameScreen';
import './styles/App.css';
let characters = characterHandler.characters;

function App() {
  const [isLoadingOver, setIsLoadingOver] = useState(false);
  let difficulty = useRef();
  const [show, setShow] = useState(false)
  const [score, setScore] = useState(0);
  const [cardsToDisplay, setCardsToDisplay] = useState(0);

  const shuffleCards = (num) => {
    if(score != 15) {
      let numCards;
      let shuffledCards = [];
      if(difficulty.current === "easy") {
        numCards = 3;
      } else if(difficulty.current === "medium") {
        numCards = 5;
      } else if(difficulty.current === "hard") {
        numCards = 7;
      }
      if(num != null) {numCards = num}
      while(shuffledCards.length < numCards && score < 14)  {  //max score - 1
        let randomIndex = Math.floor(Math.random() * (16-0) + 0);
        if(!shuffledCards.includes(characters[randomIndex]) && characters[randomIndex] != null) { //ensures there is no dupes
          shuffledCards.push(characters[randomIndex]);
        }
      }
      let randomIndex2 = Math.floor(Math.random() * ((numCards)-0) + 0);
      let nonFlippedCard = findNonFlipped(characters);
      while(nonFlippedCard === null) {  //ensures the non flipped card is not null
        nonFlippedCard = findNonFlipped(characters);
      }
      if(!shuffledCards.includes(nonFlippedCard)) { //ensures that a nonflipped card in the deck
        shuffledCards[randomIndex2] = findNonFlipped(characters);
      }
      setCardsToDisplay(shuffledCards);
    } 
  }

  const findNonFlipped = (cards) => {
    for(let i = 0; i < cards.length; i++) {
      if(cards[i].flipped === false) {
        return(cards[i]);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      //shuffleCards(); //is what creates the pokemons on mount
      setIsLoadingOver(true);
    }, 1000);
  }, []);

  return (
    <div className='main-container'>
    {isLoadingOver ?
    (
      <>
        <Header score={score} difficulty={difficulty} />
        {show ? <GameScreen shuffleCards={shuffleCards} cardsToDisplay={cardsToDisplay} score={score} setScore={setScore} show={show} setShow={setShow}/> : <StartScreen /*setDifficulty={setDifficulty}*/difficulty={difficulty} shuffleCards={shuffleCards} show={show} setShow={setShow}/>}
      </>
    )
    : null}
    </div>
  )
}

export default App
