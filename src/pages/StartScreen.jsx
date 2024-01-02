import '../styles/StartScreen.css'
import arrow from '../assets/arrow.png'
import characterHandler from '../assets/Characters';
import menuClickAudio from "../assets/poke-click.mp4";
const menuClickSound = new Audio(menuClickAudio);

function StartScreen({difficulty, shuffleCards, show, setShow}) {
    const handleClick = (x,y) => {
        menuClickSound.play()
        characterHandler.getPokemons(x);
        setTimeout(() => {
            shuffleCards(y);
            setShow(!show);
        },200)
    }

    return (
        <div className='start-screen-container'>
            <div className='header'>
                Choose Difficulty
            </div>
            <div className='options-container'>
                <div className='option'>
                    <button className="option-btn" onClick={() => {difficulty.current = "easy"; handleClick(5,3)}}>Easy</button>
                    <img className='option-arrow' src={arrow}></img>

                </div>
                <div className='option'>
                    <button className="option-btn" onClick={() => {difficulty.current = "medium"; handleClick(9,5)}}>Medium</button>
                    <img className='option-arrow' src={arrow}></img>
                </div>
                <div className='option'>
                    <button className="option-btn" onClick={() => {difficulty.current = "hard"; handleClick(15,7)}}>Hard</button>
                    <img className='option-arrow' src={arrow}></img>
                </div>
            </div>
        </div>
    )
}

export default StartScreen;