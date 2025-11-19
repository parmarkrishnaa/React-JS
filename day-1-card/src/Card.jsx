import React from "react";
import "./Card.css";
import cardImage from "./assets/image.jpeg";

function Card(){
    return (
        <React.Fragment>
            <div className="card">
                <img src={cardImage} width="100%" alt="" />
                <h2>Card</h2>
                <p>Lorem, ipsum.</p>
                <button>Click Me</button>
            </div>
        </React.Fragment>
    )
}

export default Card;