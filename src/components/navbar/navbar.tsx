import React from "react";
import "./navbar.css";

const Navbar = (): JSX.Element => {
	return (
		<nav>
			<label className="logo">
				<a href="#">FenixGaming</a>
			</label>
			<ul>
				<li>
					<a href="#">Principal</a>
				</li>
				<li>
					<a href="#">Repeticiones</a>
				</li>
				<li>
					<a href="#">noticias</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
