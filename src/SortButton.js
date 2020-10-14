import React from "react";

function SortButton(props) {
	function handelClick() {
		if (props.scoreOrder === "ascending") {
			props.alterOrder("descending");
		} else if (props.scoreOrder === "descending") {
			props.alterOrder("ascending");
		}
	}
	return (
		<button
			onClick={handelClick}
			style={{
				alignContent: "center",
				backgroundColor: "greenyellow",
				marginBottom: "20px",
				marginLeft: "10%",
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
