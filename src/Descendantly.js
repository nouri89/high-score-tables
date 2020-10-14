import React from "react";
const Descendantly = (props) => {
    return <h6
     className={ props.state==="descending"? "isSelected":""} 
    >Descendantly</h6>;
};

export default Descendantly;
