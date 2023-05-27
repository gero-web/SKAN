import React from "react";
import { Link } from "react-router-dom";

function Links({links, clssName}){
   
    return (
       <div className={clssName}>
            {  
                links.map(item => {
                    return <Link to={item.href} key={item.text}> {item.text} </Link>
                    
                })
            }
       </div>
    )
}

export default Links;