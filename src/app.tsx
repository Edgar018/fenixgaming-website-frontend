import React from "react";
import "./app.css";

import Navbar from "./components/navbar/navbar";
import NewsCards from "./components/newsCards/newsCards";
import { GridCard } from "./components/cardGrid/cardGrid";

function App() {
	return (
		<div className="App">
			<Navbar />	
			<GridCard />
		</div>
	);
}

export default App;
