import React from "react";


function SummaryCard({period, count, ricky}){
  
    
    
    return (
        <div className="sammary-card-container">
            <div className="sammary-card-body">
                <p>   {period} </p>
                <p>   {count} </p>
                <p>   {ricky} </p>
            </div>
            <div className="summary-card-line"></div>
        </div>
    )
}

export default SummaryCard;