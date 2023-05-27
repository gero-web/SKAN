import React from "react";
import Caption from "./Caption";
import About from "./about";
import Rates from "./Rates";
import body from '../../images/body.svg';


function Home(){
  
    
    return (
       <>
            <Caption></Caption>
            <About></About>
            <div className="container-body-svg">
                <img src={body}></img>
            </div>
            <Rates></Rates>
       </>
    )
}

export default Home;