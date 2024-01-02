import '../styles/GamePage.css'
import { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import characterHandler from '../assets/characters';
import GameOver from "../pages/GameOver";
import clickAudio from "../assets/click-sound.mp4";
let characters = characterHandler.characters;
const clickSound = new Audio(clickAudio);

function GameScreen({shuffleCards, cardsToDisplay, score, setScore, show, setShow}) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    let isFlipped = useRef(false);
    let winner = useRef();
    let logo = document.querySelector(".header-logo");

    const handleCardClick = (character) => {
        if(isAnimating == false) {
            clickSound.play();
            handleFlip();
            if(character.flipped === false) {
                setScore(score + 1);
                checkWinner();
                setTimeout(() => {
                    const char = characters.find(({name}) => name === character.name);
                    char.flipped = true;
                    shuffleCards();
                }, 1200);

            } else {
                // put game ending logic here
                winner.current = false;
                resetGame();
            }
        }
    }

    const handleFlip = () => {
        if(!isAnimating) {
            isFlipped.current = true;
            setIsAnimating(true);
            setTimeout(() => {
                isFlipped.current = false;
            }, 1200);
        }
    }

    const resetGame = () => {
        setIsFinished(true);
        setScore(0);
        for(let i = 0; i < characters.length; i++) {
            characters[i].flipped = false;
        }
        characters.splice(0, characters.length);
    }

    const checkWinner = () => {
        if(score == 14) {
            console.log("ended")
            setIsFinished(true);
            winner.current = true;
            resetGame();
        }
    }

    logo.addEventListener("click", function() {
        setShow(false);
        setScore(0);
        for(let i = 0; i < characters.length; i++) {
            characters[i].flipped = false;
        }
        characters.splice(0, characters.length);
    });

    return (
        <div className="card-container">
            {isFinished ?
            (
                <GameOver winner={winner} show={show} setShow={setShow} score={score}/>           
            )
            :<>
            {cardsToDisplay.map(character => {
                return(
                    <Card 
                        key={character.id}
                        character={character}
                        handleCardClick={handleCardClick}
                        isFlipped={isFlipped}
                        //setIsFlipped={setIsFlipped}
                        isAnimating={isAnimating}
                        setIsAnimating={setIsAnimating}
                    />
                );
            })}
            </>
        }
        </div>      
    )
}

export default GameScreen;