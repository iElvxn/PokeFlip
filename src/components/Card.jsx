import { motion } from 'framer-motion'

function Card({character, handleCardClick, isFlipped, /*setIsFlipped,*/ isAnimating, setIsAnimating}) {
    const capitalizeName = (name) => { 
        return(name[0].toUpperCase() + name.slice(1));
    }

    let shinyClass = "";
    if(character.isShiny == true) {
        shinyClass = "shiny";
    }  

    /*const fixSRC = (src) => {  //in case the api messes up again
        if(src.length > 90) {
            return src.slice(57);
        }else return src;
    }*/

    return(
        <div className="card" onClick={() => {handleCardClick(character)}}>
            <motion.div
                className='card-inner'
                initial={false}
                animate={{rotateY: isFlipped.current ? 180 : 360}}
                transition={{duration: 0.6, animationDirection: "normal", repeat: 1, repeatType: "reverse"}}
                onAnimationComplete={() => {
                    setTimeout(() => {
                        setIsAnimating(false);
                    }, 200);
                }}
            >
                <div className="card-front">
                    <div className="card-img-container">
                        <img className='card-img' src={character.src}></img>
                    </div>
                    <div className={"card-name "+ shinyClass} id={character.id}>{capitalizeName(character.name)}</div>
                </div>
                <div className="card-back">

                </div>
            </motion.div>
        </div>
    )
}

export default Card;
