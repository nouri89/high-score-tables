import React from "react";
const Ascendantly = (props) => {
	return (
		<h6 className={props.state === "ascending" ? "isSelected" : ""}>
			Ascendantly
		</h6>
	);
};

export default Ascendantly;
