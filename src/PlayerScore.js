import React from "react";

function PlayerScore(props) {
	return (
		<div className="playerScore" style={{ display: "flex" }}>
			<h4>{props.pName}</h4>
			<h3 style={{ color: "red", paddingLeft: "50px" }}>{props.pScore}</h3>
		</div>
	);
}

export default PlayerScore;
