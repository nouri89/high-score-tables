import React from "react";
import "./App.css";
import HighScoreTable from "./HighScoreTable";

function App() {
	return (
		<div className="App">
			<h1>High Scores per Country</h1>

			<HighScoreTable />
		</div>
	);
}

export default App;
