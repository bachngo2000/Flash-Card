import React, { useState } from "react";

const Card = (props) => {

    const [isFrontSide, setSide] = useState(true);

    const whenUserClicks = () => {
        setSide(oldState => !oldState);
    }

    const text = isFrontSide ? props.question : props.answer;

    return (
        <div className="card-container">
            <div className="card" onClick={whenUserClicks}>
                {text}
            </div>
        </div>
    )
}

export default Card;
