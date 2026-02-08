import React from "react";

function YesButton() {
    const handleClick = () => {
        console.log('Yes')
    }
    return (
        <button onClick={handleClick}>
            Yes
        </button>
    );
}


export default YesButton;