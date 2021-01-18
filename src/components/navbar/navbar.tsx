import React from "react";
import "./navbar.css";

const Navbar = () => {
	return (
		<nav>
			<label className="logo">
				<a href="#">FenixGaming</a>
			</label>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Replays</a>
				</li>
				<li>
					<a href="#">News</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
