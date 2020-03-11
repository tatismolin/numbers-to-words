import React from "react";

function Result({newValue}){

    const refreshPage = () => {
        window.location.reload(false);
    };

    return(
        <div className="result">
            <h2>You've entered...</h2>
            <p>{newValue}</p>
            <span 
                className="back-button" 
                onClick={() => {refreshPage()}}
                role="img" 
                aria-label="delete button">
                🔙
            </span>
        </div>
    );

};

export default Result;
