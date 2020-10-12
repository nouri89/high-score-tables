import React from "react";

function SortButton(props) {
	return (
		<button
			onClick={props.handel}
			style={{
				backgroundColor: "greenyellow",
				marginBottom: "20px",
				borderRadius: "5px",
				border: "none",
				cursor: "pointer",
				width: "80%",
			}}
		>
			Click to Sort the Score Ascendantly / Descendantly{" "}
		</button>
	);
}
export default SortButton;
