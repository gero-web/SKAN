import React from "react";
import Home from './Home';
import Login from "../login/Login";
import {Routes, Route} from 'react-router-dom';
import PageSearch from "../pageSearch/PageSearch";
import { useSelector } from "react-redux";
import Summary from "../summary/Summary";

function Main(){
  
    const isAuth = useSelector((state) => state.user.isAuth);
    
    return (
       <>
       
        <Routes>
            <Route path="/login" element={<Login />}></Route>     
            <Route path="/" element={<Home />}></Route>  
            { 
                isAuth &&  <>
                    <Route path="/page_search" element={ <PageSearch />}></Route>  
                    <Route path="/summary" element={ <Summary />}></Route>  
                </>
            }
        </Routes>
       </>
    )
}

export default Main;