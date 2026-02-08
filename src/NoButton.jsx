import React from "react";

function NoButton() {
    const handleClick = () => {
        console.log('No')
    }
    return (
        <button onClick={handleClick}>
            No
        </button>
    );
}


export default NoButton;