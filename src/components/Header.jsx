import headerlogo from '../assets/headerlogo.png'

function Header({score}) {

    return (
        <div className="header-container">
            <img className="header-logo" src={headerlogo}></img>
            <div className="score-board">Score: {score}/15</div>
        </div>
    )
}

export default Header