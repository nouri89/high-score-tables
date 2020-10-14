import React from "react";
import Ascendantly  from "./Ascendantly"
import Descendantly from "./Descendantly"
function SortButton(props) {
	function handelClick() {
		
		props.scoreOrder === "ascending"
			? props.alterOrder("descending")
			: props.alterOrder("ascending");

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
			Click to Sort the Score <Ascendantly state={props.scoreOrder} />
			<Descendantly state={props.scoreOrder} />
		</button>
	);
}
export default SortButton;
