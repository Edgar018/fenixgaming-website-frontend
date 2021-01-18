import React from "react";
import "./newsCards.css";

const NewsCards = () => {
	return (
		<div className="card">
			<div className="image">
				<img src="https://wow.zamimg.com/uploads/screenshots/normal/890024.jpg" alt="img" />
				<h2 className="title">Tournament</h2>
			</div>
			<div className="content">
				<p>May 25th 2020</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, aliquam.</p>
				<button>Read More</button>
			</div>
		</div>
	);
};

export default NewsCards;
