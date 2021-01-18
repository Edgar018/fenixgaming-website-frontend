import React from "react";
import "./newsCards.css";

const NewsCards = (): JSX.Element => {
	return (
        <div className="card">
            <img className="card__image" src="https://wow.zamimg.com/uploads/screenshots/normal/890024.jpg" alt="image"/>
            <p className="card_text" >5to Torneo De Warcraft 3 Reforged</p>
            <footer>12-2-20</footer>
         </div>  
	);
};

export default NewsCards;
