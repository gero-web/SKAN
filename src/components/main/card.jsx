import React from "react";

function Card({card}){
    
   
    return (
  
        <div className="card-container">
            <div className="card-icon">
                <img src={card.svg}></img>
            </div>
            <p className="card-text">
                {card.text}
            </p>
        </div>
    
    )
}

export default Card;