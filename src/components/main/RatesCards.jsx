import React from "react";

function RatesCards({item}){
    
    return (
       <div className="rates-container-cards"  style={{border:item.style['border']}}>
            <div className="rates-cards-header" style={{ backgroundColor: item.style['backgroundColor']}}>
                <h2 style={{color:item.style['color']}}> {item.caption} </h2>
                <p style={{color:item.style['color']}}> {item.description}</p>
                <img src={item.logo} className="rates-cards-icon"></img>
            </div>
                <div className="rates-card-price ">
                    <div className="rates-price-container">
                        <div className="rates-price">
                            <p>{item.price} </p>
                            <p className="rates-price-cross ">{item.priceCross} </p>
                        </div>
                        <p>{item.textDiscount}</p>
                    </div>
                    { item.isActive &&
                        <div className="rates-card-active" >
                            <p></p>
                        </div>
                    }

                </div>
                <div className="rates-tariffIncludes-container">
                    <h3> В тариф входит: </h3>
                    <ul>
                        {item.lstUl.map( (item, id) => {
                            return  <li key={item+id}>   {item} </li>;
                        })}
                       
                    </ul>
                </div>
                <div className="reates-card-btn-container">
                    <button className="info-btn" onClick={item.onClick}>{item.textBtn}</button>
                </div>
       </div>
    )
}

export default RatesCards;