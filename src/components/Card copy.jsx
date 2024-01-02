

/*function Card({character, handleCardClick}) {
    const capitalizeName = (name) => {
        return(name[0].toUpperCase() + name.slice(1));

    }

    const fixSRC = (src) => {  //in case the api messes up again
        if(src.length > 90) {
            return src.slice(57);
        }else return src;
    }

    return(
        <div className="card" onClick={() => {handleCardClick(character)}}>
            <div className="card-img-container">
                <img className='card-img' src={fixSRC(character.src)}></img>
            </div>
            <div className="card-name">{capitalizeName(character.name)}</div>
        </div>
    )
}

export default Card;*/
