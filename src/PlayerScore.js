import React from "react";

function PlayerScore(props) {
	return (
		<div
			className="playerScore"
			style={{
				position: "relative",
			}}
		>
			<h4 style={{  position: "absolute",left:"0px" }}>
				{props.pName}
			</h4>
			<h4
				style={{
					position: "absolute",
					right:"-316px",
					color: "red",
					
				
					
				}}
			>
				{props.pScore}
			</h4>
		</div>
	);
}

export default PlayerScore;
