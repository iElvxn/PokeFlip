import '../styles/StartScreen.css'
import sadPikachu from '../assets/sad-pikachu.gif';
import happyPikachu from '../assets/happy-pikachu.gif';
import menuClickAudio from "../assets/poke-click.mp4";
const menuClickSound = new Audio(menuClickAudio);

function GameOver({winner, show, setShow, score}) {
    let text = "";
    let gif;
    if(winner.current === true) {
        text = "Congrats, you caught them all!";
        gif = happyPikachu
    } else {
        text = "Game Over!";
        gif = sadPikachu
    }

    return (
        <div className='start-screen-container'>
            <div className='header' id='game-over-header'>{text}</div>
            <img className='menu-gif' src={gif}></img>
            <div className='option'>
                <button className="option-btn" id='play-again-btn' onClick={() => {setShow(!show); menuClickSound.play()}}>Play Again</button>
            </div>
        </div>
    )
}

export default GameOver;