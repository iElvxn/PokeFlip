import headerlogo from '../assets/headerlogo.png'

function Header({score, difficulty}) {
    let totalRounds;
    console.log(difficulty)
    if(difficulty.current === "easy") {
        totalRounds = 5;
    } else if(difficulty.current == "medium") {
        totalRounds = 9
    } else if(difficulty.current == "hard") {
        totalRounds = 15;
    }

    return (
        <div className="header-container">
            <img className="header-logo" src={headerlogo}></img>
            <div className="score-board">Score: {score}/{totalRounds}</div>
        </div>
    )
}

export default Header