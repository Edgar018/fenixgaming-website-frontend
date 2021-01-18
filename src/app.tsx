import React from "react";
import "./app.css";

import Navbar from "./components/navbar/navbar";
import NewsCards from "./components/newsCards/newsCards";
import GridCard from "./components/cardGrid/cardGrid";
import SideBar from "./components/sidebar/sidebar";

function App() {
	return (
		<div className="App">
			<Navbar />
            <div className="app__page">
                <SideBar />
			    <GridCard />
            </div>	
		</div>
	);
}

export default App;
